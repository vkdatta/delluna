export const name="airplane-takeoff-bold";
export const id="dl_b72c6fed76e54169bcbd";
export const url=new URL("../icons/airplane-takeoff-bold.svg?v=49c87897d0ec0ca734553d06d43ff76f0a4ac85ebc56aeb6993988b198445b7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
