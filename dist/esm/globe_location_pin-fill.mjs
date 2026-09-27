export const name="globe_location_pin-fill";
export const id="dl_c556951da86da60feb76";
export const url=new URL("../icons/globe_location_pin-fill.svg?v=3ccfe2baef516eb3fc9f4c943e2e8e4cd782633d158c7a3c119e7be6996186fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
