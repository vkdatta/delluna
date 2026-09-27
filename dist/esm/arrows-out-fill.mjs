export const name="arrows-out-fill";
export const id="dl_7fa337c3c94a401387da";
export const url=new URL("../icons/arrows-out-fill.svg?v=f553c4caf61e7204e5f301383d570cc414fe38a191e488c5bd57462ad061c5ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
