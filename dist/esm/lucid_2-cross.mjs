export const name="lucid_2-cross";
export const id="dl_b4beae219421476e9c6a";
export const url=new URL("../icons/lucid_2-cross.svg?v=88c9f16a5c582066a45ed5de04543cd3e23a5c33f839eea3d5285689e769ea86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
