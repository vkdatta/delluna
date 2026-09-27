export const name="cigarette";
export const id="dl_4384adabc1cd46ec9e9d";
export const url=new URL("../icons/cigarette.svg?v=211509133a05cedb5dbd2db86fffac29e24e517dcf34bb912351f3d853fe46cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
