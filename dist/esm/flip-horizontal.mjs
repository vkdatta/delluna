export const name="flip-horizontal";
export const id="dl_76882969591e49cfb450";
export const url=new URL("../icons/flip-horizontal.svg?v=a14a7e7f31fa3947c1cbf37b6f8a3d6ab617fd6618e39920ac11cff5f279a2c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
