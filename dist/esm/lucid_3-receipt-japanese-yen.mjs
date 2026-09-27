export const name="lucid_3-receipt-japanese-yen";
export const id="dl_c5caff52cd23455585fa";
export const url=new URL("../icons/lucid_3-receipt-japanese-yen.svg?v=0db10e0cfd454bad14e1fba5a463e6415c676f35572d74925b3416c09dff0caf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
