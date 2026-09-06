export const name="faders-horizontal-fill";
export const id="dl_643f949c0e2e49e68671";
export const url=new URL("../icons/faders-horizontal-fill.svg?v=29379ab146c4fcdc98abac5f7867f0d3d8d39d4ad7b32cfd94421cac89c295d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
