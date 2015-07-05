var getStreams = function (twitchStreams) {
    var streams = {};

    $.each(twitchStreams, function (index) {
        streams[index] = {};
        streams[index].link = 'http://twitch.tv/' + index;
        streams[index].stream = twitchStreams[index].queryStream().$promise;
        streams[index].profile = twitchStreams[index].queryUser().$promise;
    });
    return streams;
};


var formatStreams = function (streams) {
    var data = [];

    $.each(streams, function (index, value) {
        var channel = {};
        channel.link = value.link;
        channel.name = index;

        value.stream.then(function (stream) {
            channel.active = hasValue(stream.stream);
            channel.title = channel.active ? channel.title = stream.stream.channel.status : 'offline...';
            channel.titleShort = stringLimit(channel.title, 30, '...');
        });

        value.profile.then(function (profile) {
            channel.img = hasValueOrDefault(profile.logo, 'http://placehold.it/48x48');
        });

        data.push(channel);
    });

    return data;
};

var filterStreams = function (streams, filter) {
    filter = hasValueOrDefault(filter, 'all');

    var data = streams;
    if (filter !== 'all') {
        $.each(data, function (index, value) {
            var isActive = filter == 'active';
            if (value.active !== isActive) {
                delete data[index];
            }
        });
    }
    return data;
};

var hasValueOrDefault = function (canadiate, defValue) {
    return hasValue(canadiate) ? canadiate : defValue;
};
var hasValue = function (canadiate) {
    return !(canadiate == null || canadiate == undefined || canadiate == '');
};

var stringLimit = function (text, length, append) {
    if (text.length > length) {
        text = text.substr(0, length);
        text = text.substr(0, text.lastIndexOf(' ')) + append;
    }
    return text;
};
