export const name="eye-closed-fill";
export const id="dl_7d7490a9595043ce8e35";
export const url=new URL("../icons/eye-closed-fill.svg?v=42944bf6da6385a33d6e07bd38a8972c8e25b8bb550f79a213e7be35efdb26e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
