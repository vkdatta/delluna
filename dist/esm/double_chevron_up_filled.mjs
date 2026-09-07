export const name="double_chevron_up_filled";
export const id="dl_b5117602e84a4bec93bb";
export const url=new URL("../icons/all_60_named_svgs/double_chevron_up_filled.svg?v=f27be77374de5ed3f0ed9f28f3be2823039e05eeba7bd062384c6e5f9a33eaf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
