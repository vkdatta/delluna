export const name="first-aid-kit-thin";
export const id="dl_350c056971654f03a198";
export const url=new URL("../icons/first-aid-kit-thin.svg?v=9038ea52871b424c8e917a10ff9c3aa3d4435f00ad70ed4d9120f7db202912d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
