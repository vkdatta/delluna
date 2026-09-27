export const name="flowsheet";
export const id="dl_5320bd42bc6942963053";
export const url=new URL("../icons/flowsheet.svg?v=36800534809a3bed1d68f33e40e8d5beb2d3e1933b5c4225a955e5b671b86170",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
