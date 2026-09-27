export const name="bone-duotone";
export const id="dl_77b2ecfc7e494f7d94c3";
export const url=new URL("../icons/bone-duotone.svg?v=05af75e5a7a51242563724f92e48ab726d0800b376216f44d52e870d28d62466",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
