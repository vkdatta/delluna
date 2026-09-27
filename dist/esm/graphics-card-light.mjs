export const name="graphics-card-light";
export const id="dl_db16b3f17fe545049944";
export const url=new URL("../icons/graphics-card-light.svg?v=4c40561f5b1959b11ebb18d8e6e3225facd68fbe33efe04de45ee2f7da7e1db4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
