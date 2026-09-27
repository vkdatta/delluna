export const name="sentiment_extremely_dissatisfied-fill";
export const id="dl_161e218f0ae9e6175793";
export const url=new URL("../icons/sentiment_extremely_dissatisfied-fill.svg?v=74a3ddac0f94d67de45645236068e3716d6700f754a0cb0e85fc5b2144cc87d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
