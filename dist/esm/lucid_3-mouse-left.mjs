export const name="lucid_3-mouse-left";
export const id="dl_37e996dacc6c474295b4";
export const url=new URL("../icons/lucid_3-mouse-left.svg?v=653e808c062657f661add66e1b9572d279bf6454b08ac8ab088160b1ac4de981",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
