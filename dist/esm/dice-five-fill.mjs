export const name="dice-five-fill";
export const id="dl_c4c740f46f1d4c8cb0bd";
export const url=new URL("../icons/dice-five-fill.svg?v=d04e5a981b63690445afac2925920d5550fccd9b14c9826f19479ba34a5c5979",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
