export const name="percent_discount";
export const id="dl_47f0e3d873257e5ce937";
export const url=new URL("../icons/percent_discount.svg?v=c44b273539207d7edd90ac418a48aec597c1f1e53826decab56e27ec6c82d20e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
