export const name="baby-light";
export const id="dl_40903c83259845789909";
export const url=new URL("../icons/baby-light.svg?v=eea4c5f9143b3be52e0daa11470b89268bb4953e8a4544bfc617f74a3f169c80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
