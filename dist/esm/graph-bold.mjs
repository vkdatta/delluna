export const name="graph-bold";
export const id="dl_2287915ac6f64b409b15";
export const url=new URL("../icons/graph-bold.svg?v=6bc92d6ebb306ccf3c62e6e800d715cb9bab4f017270f29cd5f4fab45031ffb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
