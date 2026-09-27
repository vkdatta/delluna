export const name="battery-plus-vertical-fill";
export const id="dl_8314b7417c6149b29470";
export const url=new URL("../icons/battery-plus-vertical-fill.svg?v=493b0fc6d57911a0fd4cf9feb3f78ffdd20da647bb85e87b15eb7c6c8808615f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
