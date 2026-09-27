export const name="phone-transfer-thin";
export const id="dl_515f5ca072814bb1936c";
export const url=new URL("../icons/phone-transfer-thin.svg?v=56d09481267e74ed072b8440a45836e361a15206a652a6763815b16e45f2f968",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
