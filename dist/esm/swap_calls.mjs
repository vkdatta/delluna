export const name="swap_calls";
export const id="dl_63edef4923ff4cfe8041";
export const url=new URL("../icons/swap_calls.svg?v=4399b478657348c369e5ad9b2ad5b335740edea4892db250a81df034fb48a2aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
