export const name="bone-fill";
export const id="dl_37b8d9f3a819493aa5b2";
export const url=new URL("../icons/bone-fill.svg?v=8bb855b2e703d27a2fc2aeb873b151504bd7f74bde07489d39a270f1cd645c7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
