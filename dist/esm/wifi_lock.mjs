export const name="wifi_lock";
export const id="dl_826fbe74ed7545ea3778";
export const url=new URL("../icons/wifi_lock.svg?v=cdb78f00132fe5bdc2e052465e490515603e18002f551fb7dc73fcf2a42dace1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
