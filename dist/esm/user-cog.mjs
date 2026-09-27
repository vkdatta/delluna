export const name="user-cog";
export const id="dl_e058e0d184c1496ab652";
export const url=new URL("../icons/user-cog.svg?v=93b6bc6b89273fc703d11088bb28c45b0c27b54369a7601f880a7f2f19a8a213",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
