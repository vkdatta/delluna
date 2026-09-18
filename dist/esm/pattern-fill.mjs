export const name="pattern-fill";
export const id="dl_55d3b9c6c4914f6491ce";
export const url=new URL("../icons/pattern-fill.svg?v=2b869253da427f7b24af4c2b8bdd92764679f2a26c1af299497314d5927b5ba1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
