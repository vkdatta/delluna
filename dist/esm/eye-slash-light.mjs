export const name="eye-slash-light";
export const id="dl_70a137282718485494b3";
export const url=new URL("../icons/eye-slash-light.svg?v=399fa2830bf57de6a8762c44859ef4a7eb7e649489eb00416c32379823d4b755",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
