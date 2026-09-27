export const name="taxi-bold";
export const id="dl_8aefe28e6063b1b79515";
export const url=new URL("../icons/taxi-bold.svg?v=f013e2b725f2f666b1e03a2c27a451b12c2c5a8eed78774e4c7fe617816c024c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
