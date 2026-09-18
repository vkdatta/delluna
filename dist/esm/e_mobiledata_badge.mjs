export const name="e_mobiledata_badge";
export const id="dl_b5a083272cca43f8b22f";
export const url=new URL("../icons/e_mobiledata_badge.svg?v=4699ca2919092dfd3cba1e01d7892cbdbf2f24ca3f772eec7f8890598eca1fbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
