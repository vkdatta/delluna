export const name="cards_star-fill";
export const id="dl_392c1272f81aa1b20b2f";
export const url=new URL("../icons/cards_star-fill.svg?v=8c64d563c8cf9fb9aaac59b40b979612a834a54e821fbcb46f065431e24ea62b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
