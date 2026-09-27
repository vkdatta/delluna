export const name="head-circuit";
export const id="dl_5f14269529c543289e79";
export const url=new URL("../icons/head-circuit.svg?v=098c979b3f4ee653a540e9079f1e6cb0df414026ea085c21c3c28a2f516c486f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
