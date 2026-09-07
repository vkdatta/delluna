export const name="exam-fill";
export const id="dl_86ea817d1f314406af87";
export const url=new URL("../icons/exam-fill.svg?v=89c46e248bbdd29cf341bbd7016628fa36e5f5cd360e15338e0970001f2e6162",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
