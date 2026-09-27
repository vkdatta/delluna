export const name="list-dashes-duotone";
export const id="dl_347d552a2f50413d8b6c";
export const url=new URL("../icons/list-dashes-duotone.svg?v=d52d83affa8c3c5bccbb10566e5432b078b3d787c02ec6ad87e869a7822216e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
