export const name="envelope-open-light";
export const id="dl_b6065285cce54200974f";
export const url=new URL("../icons/envelope-open-light.svg?v=fb20e3efaa87e0dea787937675179abd51ceabb2d91c68e01c77da80235ba2d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
