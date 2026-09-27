export const name="price_change-fill";
export const id="dl_c0b217aa29298e271d99";
export const url=new URL("../icons/price_change-fill.svg?v=f4870abe6fd7f2bd83f6ddc3e89183c5e2bacd674c72d92d69e040089a492064",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
