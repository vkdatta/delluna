export const name="multiple_airports";
export const id="dl_bbfd26c2ca1ab51204bf";
export const url=new URL("../icons/multiple_airports.svg?v=c99f16b37b3d48a7c547c5174f6961905742a616b8707834109a8f4e32188d1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
