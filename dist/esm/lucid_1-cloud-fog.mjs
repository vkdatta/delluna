export const name="lucid_1-cloud-fog";
export const id="dl_dcad400f654149b5bb8d";
export const url=new URL("../icons/lucid_1-cloud-fog.svg?v=7c0fe38b22316fa6d0f7a7883ef6f152547c3064e032b6989407d7a1a025db21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
