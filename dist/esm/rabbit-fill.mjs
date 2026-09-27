export const name="rabbit-fill";
export const id="dl_a8fd9076b5e84a97aa4b";
export const url=new URL("../icons/rabbit-fill.svg?v=fe9c76e3a70e68540aae485509416d7e5f98e74fef4ad8022b0dcbef0eb4454b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
