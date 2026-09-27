export const name="clock-user-duotone";
export const id="dl_02ab6ea441bb4ba18134";
export const url=new URL("../icons/clock-user-duotone.svg?v=b2c7e9b5653e6755432e759060411bcd91bfb207d4a2e6e13972ab80abfe0fc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
