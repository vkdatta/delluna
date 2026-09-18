export const name="prescriptions-fill";
export const id="dl_b8b2d71af88044f6ad54";
export const url=new URL("../icons/P/prescriptions-fill.svg?v=1090ac0198c9645ac71a37849da4d34d56add498dab7efd644c535bdfa6de3ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
