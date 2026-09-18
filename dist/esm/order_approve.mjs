export const name="order_approve";
export const id="dl_c49bfa99095449249c84";
export const url=new URL("../icons/order_approve.svg?v=ac378ea8fb80d725baa8bfbb16e6db2179b95f147376bc8dd0a72c31fb308e7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
