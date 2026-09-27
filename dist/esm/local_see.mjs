export const name="local_see";
export const id="dl_edd8b314d803f8b6c5d0";
export const url=new URL("../icons/local_see.svg?v=c00c949d8e85dec8cde0aa225717c1c5dd5d13af53415e0f65c6b8e38b3cb640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
