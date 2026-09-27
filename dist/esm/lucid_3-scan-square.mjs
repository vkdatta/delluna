export const name="lucid_3-scan-square";
export const id="dl_b23fa8def5a744b092b6";
export const url=new URL("../icons/lucid_3-scan-square.svg?v=f8d3cd221d031c946794d34249c74cd6dd0646581c4e530162973d04e9748a41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
