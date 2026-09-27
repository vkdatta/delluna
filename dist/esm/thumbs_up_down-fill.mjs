export const name="thumbs_up_down-fill";
export const id="dl_25d8734f0167f2208d8a";
export const url=new URL("../icons/thumbs_up_down-fill.svg?v=0ef8253bfc4de01c6d1d1547f72006ab3f85737a51a8d37831828b89c65a6738",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
