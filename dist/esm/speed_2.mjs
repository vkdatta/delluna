export const name="speed_2";
export const id="dl_8b2aa36daf690d61dd9b";
export const url=new URL("../icons/speed_2.svg?v=812dbbec1c9afbaab76a20be2120da34fcb3293a0f26f43c7100116ed43a265b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
