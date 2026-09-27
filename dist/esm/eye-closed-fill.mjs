export const name="eye-closed-fill";
export const id="dl_7d7490a9595043ce8e35";
export const url=new URL("../icons/eye-closed-fill.svg?v=37f68f60672b15e28d4edfabfc12819597b1b67abd350b9036b40f5f5f965174",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
