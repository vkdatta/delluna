export const name="barricade-duotone";
export const id="dl_7fac7471c9cd48f294f2";
export const url=new URL("../icons/barricade-duotone.svg?v=140d754f2480a663684a3dabdc1a6e658498ce501913e2ece615bc854d8b4a44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
