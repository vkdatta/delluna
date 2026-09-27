export const name="light_group";
export const id="dl_c5917c0be8afd99f24a4";
export const url=new URL("../icons/light_group.svg?v=654c4c90476e121977ab3f69a354df359db5440d56467c6942d77fb8da8c4440",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
