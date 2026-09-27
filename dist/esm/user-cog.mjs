export const name="user-cog";
export const id="dl_e058e0d184c1496ab652";
export const url=new URL("../icons/user-cog.svg?v=496fc72375c0640a63144ccee3e6bf03c7c12f0f1c4989f6f458d68208ef16aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
