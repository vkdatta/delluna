export const name="number-six-bold";
export const id="dl_42736af806fd4947ae98";
export const url=new URL("../icons/number-six-bold.svg?v=b4802bd99b00a8fafc01d210cd389b8d8faaa12ea54b69906ff643a186aebd85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
