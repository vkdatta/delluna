export const name="electric_scooter";
export const id="dl_339486c5ec113bae4322";
export const url=new URL("../icons/electric_scooter.svg?v=abdad539889d2ea74d07eb3080cd40f92aa4a87f836ca415f8f785f2f8141c7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
