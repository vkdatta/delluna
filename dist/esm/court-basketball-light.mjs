export const name="court-basketball-light";
export const id="dl_b9ce11a285d946e5868f";
export const url=new URL("../icons/court-basketball-light.svg?v=48b0295c110b9b896f75cfb8eeed4a286e3a6b34fc8f3db3909f761d09bd9287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
