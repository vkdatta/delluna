export const name="shelf_position-fill";
export const id="dl_53c6686d37aa4b0c9af0";
export const url=new URL("../icons/S/shelf_position-fill.svg?v=e6feb3ee035d43bd901ee215c5f99b8502fcbf6137a72d628ed282e21d94b658",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
