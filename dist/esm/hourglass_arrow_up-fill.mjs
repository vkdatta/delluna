export const name="hourglass_arrow_up-fill";
export const id="dl_b5f6cf78d03444e69915";
export const url=new URL("../icons/H/hourglass_arrow_up-fill.svg?v=0836ef9ae8af536b1d16d1de619ab0fcb487aa38b4438ce2b28685dee8272957",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
