export const name="laundry-fill";
export const id="dl_b777c31c559d4cf09157";
export const url=new URL("../icons/laundry-fill.svg?v=c3b12fb6a4ef79dd3794fbfc0d0c284ac3a5b8e7efe77f4a9e2688bbd3a7d55e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
