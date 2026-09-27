export const name="inpatient";
export const id="dl_b39b4af8d10546cd5f5d";
export const url=new URL("../icons/inpatient.svg?v=628d2f51ebf8de76520d0fd1d1d829fa88c3fb35d55d96b94e70e9f3c64819b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
