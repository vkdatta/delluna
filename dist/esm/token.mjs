export const name="token";
export const id="dl_ec1ceaa19daf454cae05";
export const url=new URL("../icons/token.svg?v=5fd4775b2a2564954ceb68e98eaaf55af9a0b69575990e734c91ec571fcae6d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
