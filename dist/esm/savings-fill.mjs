export const name="savings-fill";
export const id="dl_e5b0436f0ac8c252b486";
export const url=new URL("../icons/savings-fill.svg?v=86dbf527495a7c906e1f105bd7e0e886447162761c6bc0f532dcdba2fa867a15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
