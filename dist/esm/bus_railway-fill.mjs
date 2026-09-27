export const name="bus_railway-fill";
export const id="dl_aa0872ca4097728a17df";
export const url=new URL("../icons/bus_railway-fill.svg?v=c8106bfca1d43c304b0586f768a53d485dbf3df19f7776cad651c9342e737af9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
