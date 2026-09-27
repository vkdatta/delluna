export const name="user-circle-check-fill";
export const id="dl_0d0ba032cd7823c2cf0f";
export const url=new URL("../icons/user-circle-check-fill.svg?v=557d9b6e7b9bf1a2a07ee41b0d00c810c3809520db26dae1a42cad74041dc276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
