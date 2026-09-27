export const name="radio-button-duotone";
export const id="dl_e06d2d6af24b49f0895f";
export const url=new URL("../icons/radio-button-duotone.svg?v=4239457bbb2c6b3214a6c15959be2dc829d213951232c5e2ef7b97d8ac6fd143",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
