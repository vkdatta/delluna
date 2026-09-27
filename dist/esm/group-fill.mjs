export const name="group-fill";
export const id="dl_6d229ca756408bcd2d4c";
export const url=new URL("../icons/group-fill.svg?v=3affda37757d69b67dbb1323ba6ed804317b6d9a57a1f8770747e2506d9fcc06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
