export const name="speaker-simple-none-fill";
export const id="dl_78422488b18e13932dae";
export const url=new URL("../icons/speaker-simple-none-fill.svg?v=9c84a4a583cd21116e7d1643e4507395891010bbf5b77e8876622fa78305d647",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
