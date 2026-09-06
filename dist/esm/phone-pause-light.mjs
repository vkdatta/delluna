export const name="phone-pause-light";
export const id="dl_2bc3842932a04ce887de";
export const url=new URL("../icons/phone-pause-light.svg?v=89979940435ea521ccd6db773192be81bdff4f2a9a0a0353005909a788232773",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
