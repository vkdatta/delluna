export const name="lucid_1-chart-bar";
export const id="dl_287bd184d9504a00bc93";
export const url=new URL("../icons/lucid_1-chart-bar.svg?v=ec527c8091a6343e3b3419619837e9d1a903703065083aced073cac15d0d0f4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
