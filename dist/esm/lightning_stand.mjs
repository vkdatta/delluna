export const name="lightning_stand";
export const id="dl_55d8eaa5af694ba493ad";
export const url=new URL("../icons/L/lightning_stand.svg?v=0f570adfd23a8707f44ac7b975d67d46d2e74e83542e6fb3d9a75ee2978ac96c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
