export const name="graph_2";
export const id="dl_b3ef95192e831addb315";
export const url=new URL("../icons/graph_2.svg?v=afb34f3a8860647d8e3975490082894ba3040b5cc2f8edb51130e9718086c1b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
