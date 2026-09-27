export const name="toggle_on-fill";
export const id="dl_c9074b7f6fe2a0c88177";
export const url=new URL("../icons/toggle_on-fill.svg?v=ce346e5c51566b9b88110a7ec57614e69b76773daa2b2d60800f745dd2f3bb9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
