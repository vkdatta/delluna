export const name="tree-palm-bold";
export const id="dl_e63c6cfbff1ba927834e";
export const url=new URL("../icons/tree-palm-bold.svg?v=3283d3772a4d1d90bf231f987d5892b0ccff4917625b4ddc88e3f9d6e2e0ce33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
