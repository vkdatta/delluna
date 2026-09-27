export const name="smart_card_reader_off-fill";
export const id="dl_244de4657168336e5653";
export const url=new URL("../icons/smart_card_reader_off-fill.svg?v=6cebf6a834d2f9885e00ad364c8001d4857abb0ad68569ec19d0d39531faa657",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
