module.exports = /<p>(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??openstreetmap\.org\/(?:\S*)#map=(?<zoom>\d{1,2})\/(?<lat>-?\d{1,}\.?\d{1,})\/(?<long>-?\d{1,}\.?\d{1,})(?=(\s*))\6(?:<\/a>)??(?=(\s*))\7<\/p>/g;