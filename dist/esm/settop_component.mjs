export const name="settop_component";
export const id="dl_d7900058e5f2505b107d";
export const url=new URL("../icons/settop_component.svg?v=8e8f83e4ae4b17658fa5bfdada8835e3588a184c3b7d8ddd2d0369ad5166549d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
