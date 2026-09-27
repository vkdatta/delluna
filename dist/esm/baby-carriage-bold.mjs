export const name="baby-carriage-bold";
export const id="dl_93c4114e6ce14f7491bd";
export const url=new URL("../icons/baby-carriage-bold.svg?v=3459768fcbd4e0b11fa74a0c602af96017a98b2681b877927d76cc7426d02588",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
