export const name="user-cog";
export const id="dl_e058e0d184c1496ab652";
export const url=new URL("../icons/user-cog.svg?v=191f284f0cbed06dc003796fcf17b3c4666755ab90aa0acd294b35aae71be03f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
