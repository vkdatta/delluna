export const name="person-simple-tai-chi-thin";
export const id="dl_db9d9a3313b043d8ae6e";
export const url=new URL("../icons/person-simple-tai-chi-thin.svg?v=84aff044a33750021e2de196b83e25d55391614fb11d38a446cb684b6ef294bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
