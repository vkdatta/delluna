export const name="number-four-light";
export const id="dl_81c83a0421eb48f1bb9e";
export const url=new URL("../icons/number-four-light.svg?v=817216bf61771e58cbc8e936edc14193b2675424148a3e25061a8f4e2c4bfbdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
