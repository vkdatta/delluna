export const name="wifi-fill";
export const id="dl_39f9f8d6953b429c8ad8";
export const url=new URL("../icons/W/wifi-fill.svg?v=0883e31e757d93884d9ab4c4b9b8db2e1a407944bdcad0939e23abba5b0400ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
