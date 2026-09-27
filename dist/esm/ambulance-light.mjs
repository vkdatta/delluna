export const name="ambulance-light";
export const id="dl_d6120f724f2143bbb8fd";
export const url=new URL("../icons/ambulance-light.svg?v=e735a202115d9cb3d7ccca746a3613b18c8407371bfcede206d3c663646a26f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
