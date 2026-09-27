export const name="front_hand";
export const id="dl_08570b13078ede6d3e4a";
export const url=new URL("../icons/front_hand.svg?v=ab01fabada99d06961665d82d938edcb7c922ddb4a19b55c54c943c871985f78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
