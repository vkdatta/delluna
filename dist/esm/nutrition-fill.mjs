export const name="nutrition-fill";
export const id="dl_e6fd65be518502e1439a";
export const url=new URL("../icons/nutrition-fill.svg?v=22a73f3f6707af571beed7bc9d5eccf807eebc5a88d20616e8a9dc3ff97e0500",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
