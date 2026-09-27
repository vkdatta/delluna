export const name="cardiology";
export const id="dl_2584af8550742d80b0a2";
export const url=new URL("../icons/cardiology.svg?v=3297acf94eb1730c76f9139b317167a8ef6362fa0ade2c0efb59e332cd62a3bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
