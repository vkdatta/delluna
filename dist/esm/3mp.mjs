export const name="3mp";
export const id="dl_d3edc9f42853c72507be";
export const url=new URL("../icons/3mp.svg?v=41575429d121e281cfa0e3ee1df478242ebccc88414d8b2b79787432c2107f9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
