export const name="lock_open_right";
export const id="dl_cde268fc309b4cbfaf4a";
export const url=new URL("../icons/L/lock_open_right.svg?v=3da1ca70b1d86e2aa129400294cca46aa6524d7ed5dbdaeb9c72df5461df8d6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
