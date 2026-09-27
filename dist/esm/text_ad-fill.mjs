export const name="text_ad-fill";
export const id="dl_710343e02616cfd6e496";
export const url=new URL("../icons/text_ad-fill.svg?v=5280c465b08613a7137a7345399f62594c18dec66015a70c7b91865d989bdcb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
