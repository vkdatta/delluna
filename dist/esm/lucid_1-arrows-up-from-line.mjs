export const name="lucid_1-arrows-up-from-line";
export const id="dl_ddebd07e96054c65b7ce";
export const url=new URL("../icons/lucid_1-arrows-up-from-line.svg?v=7e2463ba457c6e755a134312f562e44a27e7cbc1931b1f15299904321806931b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
