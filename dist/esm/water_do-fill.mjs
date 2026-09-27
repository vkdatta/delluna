export const name="water_do-fill";
export const id="dl_b742aa6746623da5cbb0";
export const url=new URL("../icons/water_do-fill.svg?v=2c62d0c14f9cad0ff006edb96d395e91bd16c0638d4c02a84f196cffb81811d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
