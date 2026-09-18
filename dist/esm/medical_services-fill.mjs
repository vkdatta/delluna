export const name="medical_services-fill";
export const id="dl_62813eb5780743189f70";
export const url=new URL("../icons/M/medical_services-fill.svg?v=0593959c3e41172ae8a179553bd3842dfbbcbc8c5c1231e7b27bf35dcb0d4e75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
