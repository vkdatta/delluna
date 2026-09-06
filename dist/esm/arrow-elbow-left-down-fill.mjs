export const name="arrow-elbow-left-down-fill";
export const id="dl_cfd7bf2ec83a420ea58e";
export const url=new URL("../icons/arrow-elbow-left-down-fill.svg?v=280388107ac6eb2c5a35e7a1166bc143af0839e4253a84e3ad28c2698c89d3fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
