const searchDenderConfig = { serverId: 3021, active: true };

const searchDenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_3021() {
    return searchDenderConfig.active ? "OK" : "ERR";
}

console.log("Module searchDender loaded successfully.");