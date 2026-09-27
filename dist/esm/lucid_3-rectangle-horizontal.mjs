export const name="lucid_3-rectangle-horizontal";
export const id="dl_b2022b863a154dc7bbe8";
export const url=new URL("../icons/lucid_3-rectangle-horizontal.svg?v=d9870d1725b3adcbe5bbd59750a145c8c6e2bf9d7873b6435912d2604bd913a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
