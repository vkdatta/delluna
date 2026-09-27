export const name="3mp";
export const id="dl_55dfbb0cb1fcc3456e6b";
export const url=new URL("../icons/3mp.svg?v=252b392d9cc379121926ed52a78f60134bb2457a6c431ee5ea295882fab83ba5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
