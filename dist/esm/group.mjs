export const name="group";
export const id="dl_cd96e73445954d8893ee";
export const url=new URL("../icons/G/group.svg?v=bd7ab424c1fa4bf6c6a7ed28f1c5c7c63981d020ba44df307496bd4607ca71ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
