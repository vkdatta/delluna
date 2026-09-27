export const name="lucid_1-case-sensitive";
export const id="dl_c0e729b923fd49caa0cb";
export const url=new URL("../icons/lucid_1-case-sensitive.svg?v=7ddb7cad34ca33b2e74908e9ff2155acb8f77fc5dc9498f2956979f4c6d9abc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
