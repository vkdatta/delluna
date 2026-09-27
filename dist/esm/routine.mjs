export const name="routine";
export const id="dl_bca5f0c901ebfef778c4";
export const url=new URL("../icons/routine.svg?v=3046c5343cc449fa856156dbeea517a5422f1dcc54021981379b0eac0a125de0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
