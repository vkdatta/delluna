export const name="bubble_chart-fill";
export const id="dl_7edd73ac3c8943b595a0";
export const url=new URL("../icons/B/bubble_chart-fill.svg?v=3f8ddfb994251caca6d6d1f37155c887b2e08f7de84c995ac6ca24c2e889bfe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
