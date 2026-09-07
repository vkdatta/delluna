export const name="shield-warning-bold";
export const id="dl_968adca2523e451890f6";
export const url=new URL("../icons/S/shield-warning-bold.svg?v=4f7d55d31c62860f75439545b402641ca3c9a55703f2aab0f97f7c017b51c2eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
