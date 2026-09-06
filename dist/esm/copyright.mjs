export const name="copyright";
export const id="dl_3a30c743c1a84939819b";
export const url=new URL("../icons/copyright.svg?v=40a1ad99cfed557c973ce2b5fa44258b1e5dd201732f8391416c6b0ed4a62bae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
