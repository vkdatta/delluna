export const name="link-break-light";
export const id="dl_4ff2d9384e4348a29105";
export const url=new URL("../icons/link-break-light.svg?v=9b385760ef2ba424b2cd9bfa0e5e6ca5e761fd67f4c7f216e4f5d9d73b56b850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
