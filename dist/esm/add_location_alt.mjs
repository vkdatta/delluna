export const name="add_location_alt";
export const id="dl_b6b8e745363fb8102b38";
export const url=new URL("../icons/add_location_alt.svg?v=1dfff7cdf0903a26afd10fd8e37a3cc57b2b22f31f333771457b27daeb966043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
