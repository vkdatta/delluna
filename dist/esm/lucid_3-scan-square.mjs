export const name="lucid_3-scan-square";
export const id="dl_b23fa8def5a744b092b6";
export const url=new URL("../icons/lucid_3-scan-square.svg?v=c630a2947287d5bc8c6a2a89d0f8f6cdff4b2134683ea0b82ea6516a3c4726d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
