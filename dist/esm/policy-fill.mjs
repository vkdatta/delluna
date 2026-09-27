export const name="policy-fill";
export const id="dl_a7b8f467db8415311b91";
export const url=new URL("../icons/policy-fill.svg?v=23467f227670926801a76c92f9f3836427ea5ce9849993dc811a1b4425956592",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
