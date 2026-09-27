export const name="caret-line-left-thin";
export const id="dl_aaf27e50688f44629b89";
export const url=new URL("../icons/caret-line-left-thin.svg?v=2cd3402fc859f84af097c7ef44e394e1590ea6ed541b1a8fbb55070a6ea8037b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
