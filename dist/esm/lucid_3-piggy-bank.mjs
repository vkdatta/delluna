export const name="lucid_3-piggy-bank";
export const id="dl_08c4fcf32abe47dfb41a";
export const url=new URL("../icons/lucid_3-piggy-bank.svg?v=b28d684593fd3769e30668f03eb6a9e0fe84c3a1f7b8924aeb7627f8bf1fcf80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
