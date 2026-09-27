export const name="arrow-circle-up-left-light";
export const id="dl_1f724077e8094225b353";
export const url=new URL("../icons/arrow-circle-up-left-light.svg?v=8763494a5d76e10f24156f419d793a2489c216a6f4ab4f18d7020fa7084aace3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
