export const name="child_care-fill";
export const id="dl_f6babe85d798e5d65e01";
export const url=new URL("../icons/child_care-fill.svg?v=bb2fe082c28a5cf6628046f8713db4f081c2da00fd03b65dd6e9a8e24a0e121d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
