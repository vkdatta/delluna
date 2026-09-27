export const name="dna-fill";
export const id="dl_d590f9fb70b3455da036";
export const url=new URL("../icons/dna-fill.svg?v=7cd02b6fe02d91d2fe095b4b7c39afb1bb21148e78ee8a3fe9e9be27ae936fc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
