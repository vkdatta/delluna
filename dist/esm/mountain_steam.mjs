export const name="mountain_steam";
export const id="dl_dbc51ccc68694bf1a2d6";
export const url=new URL("../icons/M/mountain_steam.svg?v=5b5da452021d9830306a6535a0c5ea412c40bf34ead43f47880547bd800a06b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
