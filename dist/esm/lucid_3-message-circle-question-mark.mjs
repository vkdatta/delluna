export const name="lucid_3-message-circle-question-mark";
export const id="dl_76569506bec64ab7960f";
export const url=new URL("../icons/lucid_3-message-circle-question-mark.svg?v=5df7ab69143f692aa81f928e318142e66bc8e71f1d3da868ed3f2a745c16f810",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
