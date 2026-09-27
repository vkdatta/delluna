export const name="identification-badge-fill";
export const id="dl_fdcae8e2cf0347b4882c";
export const url=new URL("../icons/identification-badge-fill.svg?v=7a8d4bdea350232b0de3f451305bfa7ffc13b4b28ca55d8abf33921eb6b9d146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
