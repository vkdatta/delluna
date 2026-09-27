export const name="stylus_note-fill";
export const id="dl_daf0abd34243d914117f";
export const url=new URL("../icons/stylus_note-fill.svg?v=c3b1c2738f6e299a840f0a2c4f6c914aa01d6f8b02160d04e9f28fbdbec31b23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
