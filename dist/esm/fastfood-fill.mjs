export const name="fastfood-fill";
export const id="dl_6d573d354eeb48e6819e";
export const url=new URL("../icons/fastfood-fill.svg?v=d18eae5116b3a39931bf4444ceb24af3bdd8b0aa34a646faa729f23c7c9cd3eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
