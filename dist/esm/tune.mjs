export const name="tune";
export const id="dl_163a91981ed8ea261072";
export const url=new URL("../icons/tune.svg?v=7e1f91b5303ee320854ba91569b9239580b4466adace76f7c8797d0ce819f5ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
