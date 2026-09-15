export const name="bia";
export const id="dl_b0bee45c73c346628bc4";
export const url=new URL("../icons/B/bia.svg?v=c169a28a6ab6d25a89290592a630337aacd5452a3055fd49d0e2d5719720d810",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
