export const name="thumbs_up_double-fill";
export const id="dl_0f6a95d7483076aa0dea";
export const url=new URL("../icons/thumbs_up_double-fill.svg?v=9813a11cd951c7735c0374913c4551960ae155baebb3e428a3366aa7124547ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
