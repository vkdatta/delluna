export const name="tray";
export const id="dl_39b7cb816216cbdfd8cb";
export const url=new URL("../icons/tray.svg?v=ed43ac4d68d3b460040fe669ff95db1d433bfe9fc18cfe89dd1ad24b09427308",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
