export const name="boot-fill";
export const id="dl_3c966ba0713344a2a6da";
export const url=new URL("../icons/boot-fill.svg?v=b4963276eabc5542608ba8dd380eec3bff9dfdec33d14bb2403792da31af6d08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
