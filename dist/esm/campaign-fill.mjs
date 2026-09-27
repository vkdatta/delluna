export const name="campaign-fill";
export const id="dl_ad42f77d77ca0c8d8cbb";
export const url=new URL("../icons/campaign-fill.svg?v=33a19e8d19cadd31d0e55fcd836e2e6eeb65ca5a6c818755ab79abbc70e1f1f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
