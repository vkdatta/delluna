export const name="target-fill";
export const id="dl_0438f0480f734f55b8a3";
export const url=new URL("../icons/T/target-fill.svg?v=bd73f0e44c0df18febb0ac9231b2b51a354e0199a39996d773397b9cd283a7cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
