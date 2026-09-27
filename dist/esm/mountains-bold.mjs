export const name="mountains-bold";
export const id="dl_d2c9dee9621249528bab";
export const url=new URL("../icons/mountains-bold.svg?v=1a411da706ca151663641e2deaa50c793688f504d360a520ce32beba20ed8222",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
