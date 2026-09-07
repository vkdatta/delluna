export const name="angle-light";
export const id="dl_e0c58ee97ed44929a0fb";
export const url=new URL("../icons/angle-light.svg?v=c551621f0516dace6d867f8ec08905e583c53ddde4acb32fc0c06e20e77932f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
