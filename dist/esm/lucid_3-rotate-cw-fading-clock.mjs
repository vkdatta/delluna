export const name="lucid_3-rotate-cw-fading-clock";
export const id="dl_ab26aead018649e9b04f";
export const url=new URL("../icons/lucid_3-rotate-cw-fading-clock.svg?v=f1cc4e9929dcb6283b934449f3eb9688630be1e298676c024da461fe30395d47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
