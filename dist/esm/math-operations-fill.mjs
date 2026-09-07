export const name="math-operations-fill";
export const id="dl_ab2250bdab8d4409b216";
export const url=new URL("../icons/math-operations-fill.svg?v=ccad42b87e80a7d3b7ff9eb21f0348c100e1bc52c7262a3d9cf4526212916641",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
