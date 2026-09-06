export const name="lockers";
export const id="dl_20e14bb5af0441b49890";
export const url=new URL("../icons/lockers.svg?v=7a2b1d98d04fd942d8fe27424afb945d8d99d5feef89d9d9ef0966b01e77ec3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
