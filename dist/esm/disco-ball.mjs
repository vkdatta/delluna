export const name="disco-ball";
export const id="dl_d59f536c3a5d4263bd93";
export const url=new URL("../icons/disco-ball.svg?v=5f73928626cd409f29f7ada6f1bba968ca524d52b7ce67f524871663105b36ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
