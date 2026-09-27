export const name="share_reviews-fill";
export const id="dl_04ca536727691e1c583c";
export const url=new URL("../icons/share_reviews-fill.svg?v=49479e7649846ba709c7f5845aea3be858f2ff3edd1f59a3eb75cad3a825e61a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
