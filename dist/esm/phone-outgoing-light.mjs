export const name="phone-outgoing-light";
export const id="dl_7d9c69b495b141da8e54";
export const url=new URL("../icons/phone-outgoing-light.svg?v=17158f0cbf7663524fd45b4112020a4e0f03f11f03d603165ce39d403c96543b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
