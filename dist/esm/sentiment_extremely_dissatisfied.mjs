export const name="sentiment_extremely_dissatisfied";
export const id="dl_5a3984e7b19949199ac6";
export const url=new URL("../icons/S/sentiment_extremely_dissatisfied.svg?v=69c2128795cc698f5750659c28efed92aa24012289a58a7b9bcaf641cba02483",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
