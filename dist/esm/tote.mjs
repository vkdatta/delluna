export const name="tote";
export const id="dl_977dfaf4c707471dbc2c";
export const url=new URL("../icons/T/tote.svg?v=3e8402bd0b32db7269da4d490741369eb7395bd2157c4f2a279995dc3075a985",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
