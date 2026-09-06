export const name="arrows-counter-clockwise-light";
export const id="dl_451f30189dd24163aee0";
export const url=new URL("../icons/arrows-counter-clockwise-light.svg?v=b61af4ffae4a7849425b19fe792ba91d073563f81c2d83c062bbc53c7d8a851e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
