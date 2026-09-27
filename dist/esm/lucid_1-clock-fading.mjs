export const name="lucid_1-clock-fading";
export const id="dl_3b23f9a86e7745caa0e1";
export const url=new URL("../icons/lucid_1-clock-fading.svg?v=cdb6bfd00d35c434c761cf5cc020d0361e2cc94b6b2fa1df1e40911f844c9938",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
