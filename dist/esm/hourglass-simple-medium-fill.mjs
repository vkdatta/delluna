export const name="hourglass-simple-medium-fill";
export const id="dl_14d7cc22f47f4c2fa77b";
export const url=new URL("../icons/hourglass-simple-medium-fill.svg?v=ab2e194a13974f61881c0165fd4c76437dfdc5e7046b022f0ae2dbac648e44d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
