export const name="call-bell-thin";
export const id="dl_6d0c6f40602744719620";
export const url=new URL("../icons/call-bell-thin.svg?v=25c2e89bf2a12220bda35bf2cad4b892f6140f70010190370fcbe0ee30f1632f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
