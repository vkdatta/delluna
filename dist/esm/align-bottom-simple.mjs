export const name="align-bottom-simple";
export const id="dl_5d0ba48ae98c44a0aeda";
export const url=new URL("../icons/align-bottom-simple.svg?v=23302ae2dafbc81436cfa18f0510fa80dc50292f6542a422f74a41ec19b2d4d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
