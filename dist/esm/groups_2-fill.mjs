export const name="groups_2-fill";
export const id="dl_ec61b77148d41d849d2a";
export const url=new URL("../icons/groups_2-fill.svg?v=72def4336245c2953be486d857be9dfcd2af383993289425e7c94b66089c35b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
