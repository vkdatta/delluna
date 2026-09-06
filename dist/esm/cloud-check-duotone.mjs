export const name="cloud-check-duotone";
export const id="dl_7a8f9b4204ea4785b30c";
export const url=new URL("../icons/cloud-check-duotone.svg?v=00ad572b1bb1163dd0f9a59908716092e08b1ff737b6c7d54f3deecdaa35e686",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
