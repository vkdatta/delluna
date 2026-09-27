export const name="hammer";
export const id="dl_0e4c14960616472eba60";
export const url=new URL("../icons/hammer.svg?v=554bcbd74638696c23d4213a79bbca4b3022948452f76ec6eedfdf178967211b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
