export const name="chart-bar-horizontal";
export const id="dl_648bcda44586423282c4";
export const url=new URL("../icons/chart-bar-horizontal.svg?v=696db230c525cd08c7d3870c23a479793a89178cdb1126a2c2482bce99ba7ff2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
