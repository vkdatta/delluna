export const name="sigma-thin";
export const id="dl_ca5c184b743544e08b20";
export const url=new URL("../icons/sigma-thin.svg?v=dde9b024be156af7e1a8879899efe48c48b19ca1a982ed6300829b091d657688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
