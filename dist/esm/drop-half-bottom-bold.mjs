export const name="drop-half-bottom-bold";
export const id="dl_bdfc4e8975054004918d";
export const url=new URL("../icons/drop-half-bottom-bold.svg?v=cca1af86ff72df4dbe8e172bdc2cec3727f46ada262fdf3cd270b36d2501458a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
