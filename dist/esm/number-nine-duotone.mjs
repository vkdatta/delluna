export const name="number-nine-duotone";
export const id="dl_1d9a35aa53c94957953c";
export const url=new URL("../icons/number-nine-duotone.svg?v=9c5ce75ffcea37063b1a3e1c813cf6670f0d40a5c2f0077cd9fbaae066b405af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
