export const name="cloud-warning-thin";
export const id="dl_ba3394a3a76e42f4af4e";
export const url=new URL("../icons/cloud-warning-thin.svg?v=402c9daeec1663f7bafb9b8a62700096cc732d440b38b8ea2884b7d021bfa125",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
