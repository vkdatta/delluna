export const name="serif-fill";
export const id="dl_12d07dbc71fd491a8daf";
export const url=new URL("../icons/S/serif-fill.svg?v=f02bbb094d675ce7912740d930570a140a1820ff9176a5d4e7779ab5591e0119",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
