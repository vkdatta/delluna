export const name="power";
export const id="dl_6e3c8368db7d483ba839";
export const url=new URL("../icons/power.svg?v=9b502ebf7a1130ae331d0aee8d52c15d5c5bada080c6e92b20ed9578c0bd3dbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
