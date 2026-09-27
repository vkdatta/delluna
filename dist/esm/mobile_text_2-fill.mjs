export const name="mobile_text_2-fill";
export const id="dl_1b4a8357683ef05f8f41";
export const url=new URL("../icons/mobile_text_2-fill.svg?v=0873986a753a8a9a1a550195585c583cd5446373c91e37321196d0ac34043cf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
