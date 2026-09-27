export const name="hand-arrow-up";
export const id="dl_d88f8a191acc47579639";
export const url=new URL("../icons/hand-arrow-up.svg?v=ce37ab3983c62ab185fa41dad7554b97cc5e8c83d5a761274fa027dd638955b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
