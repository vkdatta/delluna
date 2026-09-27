export const name="arrow-fat-up-light";
export const id="dl_19e1f28aa19649f6a52b";
export const url=new URL("../icons/arrow-fat-up-light.svg?v=7fa232bfca21634a1a0a388b6bf1491d9a4f162c0900d713245d815598d1ea53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
