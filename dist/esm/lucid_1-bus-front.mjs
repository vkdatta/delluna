export const name="lucid_1-bus-front";
export const id="dl_2237df42f65b4050ab81";
export const url=new URL("../icons/lucid_1-bus-front.svg?v=e609a224cc9cf25fe2a2eeb8bcbd1ccddc4c00b01d73a35f59f423b97f19402b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
