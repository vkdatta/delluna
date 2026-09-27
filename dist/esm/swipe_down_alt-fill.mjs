export const name="swipe_down_alt-fill";
export const id="dl_8ea408ff0a5794372358";
export const url=new URL("../icons/swipe_down_alt-fill.svg?v=0a05520f571ef44ceb1ef9bd98422092878f34708f618348d176735b97c41ab8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
