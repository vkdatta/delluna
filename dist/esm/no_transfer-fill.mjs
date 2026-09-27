export const name="no_transfer-fill";
export const id="dl_577438589d591d76d2aa";
export const url=new URL("../icons/no_transfer-fill.svg?v=17bce94595d8a4085045a1aa1e1797a976f18299b6efd9b95dffd12bd708f3f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
