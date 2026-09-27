export const name="binoculars-bold";
export const id="dl_8da6b246fe8d44bda328";
export const url=new URL("../icons/binoculars-bold.svg?v=772a021d6c0e38e32d2c0174b78528e7bb5120c491023f5b883ad0e80da38a17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
