export const name="lucid_2-dam";
export const id="dl_aa250b9f274e4fba82b9";
export const url=new URL("../icons/lucid_2-dam.svg?v=951c8b3c5f2185ffa4c2f6a718f0c2dfd57677a2d8d17fb59465c6c40808c23c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
