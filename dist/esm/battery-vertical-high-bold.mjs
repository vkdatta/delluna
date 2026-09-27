export const name="battery-vertical-high-bold";
export const id="dl_c072bf757dcb481c9e0d";
export const url=new URL("../icons/battery-vertical-high-bold.svg?v=cf265222053c08fc17326ee87e190a3c02136e555d102f4aee0c958f726356dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
