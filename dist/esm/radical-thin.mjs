export const name="radical-thin";
export const id="dl_3d9c1d7bcf994136b3dd";
export const url=new URL("../icons/radical-thin.svg?v=0e0ba91aa97af8c1db4423ca3bc436f4011c19a9d226438eae4ed5f606de588e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
