export const name="format_list_bulleted-fill";
export const id="dl_c85ef4c13fa9f869fec1";
export const url=new URL("../icons/format_list_bulleted-fill.svg?v=2a47c718984020831a3a62196636c8b6a58f260c5c8ddd20f30c6449e1186119",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
