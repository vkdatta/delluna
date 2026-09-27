export const name="gas-can-thin";
export const id="dl_e71cbe5bf6144b7cac7d";
export const url=new URL("../icons/gas-can-thin.svg?v=0cb61c3c83ff0a195a3531c408c9bd37d61249b1fceaa5e825876f45233bb00a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
