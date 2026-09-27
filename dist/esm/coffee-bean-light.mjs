export const name="coffee-bean-light";
export const id="dl_43c776f958d64c6fb99e";
export const url=new URL("../icons/coffee-bean-light.svg?v=3df25e1d15beca1447be6dea18774540858b2790f8efe8d6a2bff4e63a6d0bad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
