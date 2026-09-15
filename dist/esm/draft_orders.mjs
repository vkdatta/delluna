export const name="draft_orders";
export const id="dl_bbba1bec056e462ca0c0";
export const url=new URL("../icons/D/draft_orders.svg?v=96ddcb33f15115f082e5cde4f47ffa918db7f76f39e03fe9961bee16dd88cc15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
