export const name="cookie-duotone";
export const id="dl_e32ca7e5958e40858200";
export const url=new URL("../icons/cookie-duotone.svg?v=729e6471866add93214d65f372dada21c81b20a0cf252b79ac06bca020f89dd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
