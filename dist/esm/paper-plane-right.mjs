export const name="paper-plane-right";
export const id="dl_8c3b57a08cab449dbfff";
export const url=new URL("../icons/paper-plane-right.svg?v=0632717dcedf634660aae1de5680a24c3f1464ecbe90f3b365762b2d98b14a26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
