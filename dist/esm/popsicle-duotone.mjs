export const name="popsicle-duotone";
export const id="dl_f6823ab6c38a434e9612";
export const url=new URL("../icons/popsicle-duotone.svg?v=78063a4176c82571feca445c73194e5d87efc2a6d881e0bec77e049a46b22dbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
