export const name="swap_vert";
export const id="dl_7892d347b0e7bffc5612";
export const url=new URL("../icons/swap_vert.svg?v=d4e2bd0d09f129f16c1bad2b648cf2df5ed00d893c2ae1709387b4fb8e6a6932",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
