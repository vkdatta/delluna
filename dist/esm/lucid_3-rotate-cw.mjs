export const name="lucid_3-rotate-cw";
export const id="dl_f53d685902a9427f9b7d";
export const url=new URL("../icons/lucid_3-rotate-cw.svg?v=e163dfb0c1cce31b4750d7efa603775662d3a017765decc1de406b489ac759b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
