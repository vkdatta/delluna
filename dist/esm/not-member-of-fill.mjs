export const name="not-member-of-fill";
export const id="dl_2808bad170bf4a948f0e";
export const url=new URL("../icons/not-member-of-fill.svg?v=34c665791e9144b0edadd0e59253360254eccee7df124173d5e3585752b162e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
