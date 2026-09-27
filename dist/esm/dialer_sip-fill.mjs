export const name="dialer_sip-fill";
export const id="dl_f46edd3357e23662d148";
export const url=new URL("../icons/dialer_sip-fill.svg?v=caf135669be4fde8188049dc21daff9c453295136c513850397b52bc78b81d57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
