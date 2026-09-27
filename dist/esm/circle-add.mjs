export const name="circle-add";
export const id="dl_f1484f0cb3607ec906a7";
export const url=new URL("../icons/circle-add.svg?v=8fbc4fac87df1c3d6d88560676764f378e4961ff18ac50a797d1a7b10d2f42c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
