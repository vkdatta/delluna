export const name="reset_white_balance-fill";
export const id="dl_55efce843b704d318d35";
export const url=new URL("../icons/reset_white_balance-fill.svg?v=bd37d761fbe4bf8c9c290ba8095e4b9d26ea28fbe086882e4d60490c42eecd28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
