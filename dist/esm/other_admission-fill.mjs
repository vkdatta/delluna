export const name="other_admission-fill";
export const id="dl_abc950e69e1f19895343";
export const url=new URL("../icons/other_admission-fill.svg?v=0c2af22027fad419d4d46c1bf31cb9290f40e1111e0775ab35313725f8f1938d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
