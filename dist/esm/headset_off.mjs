export const name="headset_off";
export const id="dl_6240f1ebb32a4b8a8cb8";
export const url=new URL("../icons/H/headset_off.svg?v=141d8e3169ad9edc07670a79959697f99c5b6077e1dc6eb45fb25646601f0910",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
