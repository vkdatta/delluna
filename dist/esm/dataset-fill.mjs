export const name="dataset-fill";
export const id="dl_d958ff70ccd3bb4dbbc4";
export const url=new URL("../icons/dataset-fill.svg?v=fceb6e6ffd71d8d17fa04975d559e43e1d2b9e5528c7e5ed9ee2073f80d1634e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
