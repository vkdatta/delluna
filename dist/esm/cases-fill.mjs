export const name="cases-fill";
export const id="dl_152931fc38890a4bad08";
export const url=new URL("../icons/cases-fill.svg?v=fd279b64930c910d6d9ac623d63e5d8376d066d51d3889db7a712c2bd169dbbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
