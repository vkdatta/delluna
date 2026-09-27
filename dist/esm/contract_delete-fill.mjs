export const name="contract_delete-fill";
export const id="dl_26b1dffdc7d773e54b7a";
export const url=new URL("../icons/contract_delete-fill.svg?v=eb0b357e2c1c237a8f306b39b46eb622bb7343373e228eb9edee46b0b4d962a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
