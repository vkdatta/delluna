export const name="number-four-duotone";
export const id="dl_9658a03c5458418c8bb7";
export const url=new URL("../icons/number-four-duotone.svg?v=e6126626d457d48715491c35f8872ed4dcc66cd96cbfd43e4ea6d1cab947be08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
