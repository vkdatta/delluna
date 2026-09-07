export const name="ribbon";
export const id="dl_ae3ce9bf4c4e45e79b5d";
export const url=new URL("../icons/ribbon.svg?v=eb82c20c2ca252ec40ad841f149c64b3c19ec53742006a4125a5485d838d783a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
