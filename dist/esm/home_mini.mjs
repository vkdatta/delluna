export const name="home_mini";
export const id="dl_b0a36519d63c4d099c01";
export const url=new URL("../icons/H/home_mini.svg?v=82fd82fd0394b714de4024d3bdd9604d8cc067047c4b34483307955414e3581a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
