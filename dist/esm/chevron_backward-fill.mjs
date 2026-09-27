export const name="chevron_backward-fill";
export const id="dl_20d63331e15ce0238525";
export const url=new URL("../icons/chevron_backward-fill.svg?v=71d2760fefba6975ec82fd8159bf9bc4d019ea4c4b122cdc5c4d4afa6cd8c1f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
