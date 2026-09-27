export const name="person-simple-ski-duotone";
export const id="dl_67b7f0c6cdf34e85a538";
export const url=new URL("../icons/person-simple-ski-duotone.svg?v=f894bc5c4d490b3fd3f9d121b331214b10f2ebdbaffe958639b3f91ab04e00fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
