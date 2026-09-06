export const name="clover-thin";
export const id="dl_7a6e50e2bc3847ac8a22";
export const url=new URL("../icons/clover-thin.svg?v=6b42cdf48f1e16252845fcaaeff09276f51c97e2645a883f749a2b8ee7a1e121",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
