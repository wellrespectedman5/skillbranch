export default function canonize(url) {
    const reg = new RegExp('@?(https?:)?(\/\/)?((telegram|vk|vkontakte|facebook)[^\/]*\/)?([a-zA-Z0-9]*)', 'i');
    const username = url.match(reg)[5];
    return '@' + username;
}