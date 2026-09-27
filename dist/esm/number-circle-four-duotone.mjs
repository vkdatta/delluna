export const name="number-circle-four-duotone";
export const id="dl_127a4c37deb64f40ad75";
export const url=new URL("../icons/number-circle-four-duotone.svg?v=2fbbb62fa947d91b1d5e9df7647fcf4dcd1a6252d3ce439022b929a0d06ab9d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
