export const name="pin-fill";
export const id="dl_31e86c5c2bdb103dd26d";
export const url=new URL("../icons/pin-fill.svg?v=b47c662f14986e6b1d073dd97d66a3176762beaca21aee6ee3016943255962fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
