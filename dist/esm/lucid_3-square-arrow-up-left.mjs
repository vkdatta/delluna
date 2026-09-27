export const name="lucid_3-square-arrow-up-left";
export const id="dl_539a6b611cd942288e7b";
export const url=new URL("../icons/lucid_3-square-arrow-up-left.svg?v=2b277e15826e3fb8bfc13afc395b07153f40b4a1e754c1f6a9a135e4625edf24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
