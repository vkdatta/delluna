export const name="lucid_3-rows-3";
export const id="dl_7eda0e258fea442cb9fe";
export const url=new URL("../icons/lucid_3-rows-3.svg?v=89487d87373318e578a5e0c60545caec4b3aab59cd6efedb46263617f13c93ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
