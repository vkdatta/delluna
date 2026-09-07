export const name="line-vertical-duotone";
export const id="dl_e62647e5f4cb43b59734";
export const url=new URL("../icons/line-vertical-duotone.svg?v=37e139c4c65db49302c47b9d47b4161584edb0b7511685d2dcbd02cdbcd69a3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
