export const name="lifebuoy-duotone";
export const id="dl_5d77ea680d2e45f99038";
export const url=new URL("../icons/lifebuoy-duotone.svg?v=88bcb48a87efd7ece6ceb6fff9b29d1d164d556b6c9b574c4a57d102b63fc3c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
