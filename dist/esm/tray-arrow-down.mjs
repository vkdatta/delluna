export const name="tray-arrow-down";
export const id="dl_8bd16350025ea687fec1";
export const url=new URL("../icons/tray-arrow-down.svg?v=06072bba7adef0a7514c5fe8d1ed04b348aa0720f45cba3aa22fdff1661f3e3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
