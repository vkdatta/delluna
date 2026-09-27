export const name="cell-signal-slash-light";
export const id="dl_42450adf4ab14cc09960";
export const url=new URL("../icons/cell-signal-slash-light.svg?v=ab9f78d2ce30d0f2f6e019d1805462c4610190b7ddc73a8dc72e1a19cd6da279",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
