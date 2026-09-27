export const name="contactless_off";
export const id="dl_dc86290ae1ad9f24ccfa";
export const url=new URL("../icons/contactless_off.svg?v=b6be3bdd50614c1cd1824e20ff91b13c382d5d81eea54529efff9af8c845b9ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
