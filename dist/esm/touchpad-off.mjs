export const name="touchpad-off";
export const id="dl_1601aa1441be4d8c9217";
export const url=new URL("../icons/touchpad-off.svg?v=f7eeed01912a9a0d738873b4856883e48d859379106584c0a8972485129d3169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
