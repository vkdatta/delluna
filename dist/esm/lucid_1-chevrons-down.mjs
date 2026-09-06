export const name="lucid_1-chevrons-down";
export const id="dl_b11fdd6e83e84740b21b";
export const url=new URL("../icons/lucid_1-chevrons-down.svg?v=4dd8552c86dc352edc1eee8a372f987cdd81caa2d060ae546cb2544201940280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
