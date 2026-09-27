export const name="person-simple-snowboard-thin";
export const id="dl_efcd7d40fe7c48f398c1";
export const url=new URL("../icons/person-simple-snowboard-thin.svg?v=2cdcaab52ef6531a04cedd89b7400c092553765cb409660147be528c5f301a3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
