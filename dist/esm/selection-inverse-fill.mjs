export const name="selection-inverse-fill";
export const id="dl_a07ad6d650017da51425";
export const url=new URL("../icons/selection-inverse-fill.svg?v=354ae68c4ecd36189bedc918270f8eb4090623a9bcc46b233bda37b4cd60bffe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
