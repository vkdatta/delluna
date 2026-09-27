export const name="keep_off";
export const id="dl_62ee483ef64cfd2535b9";
export const url=new URL("../icons/keep_off.svg?v=ace58493789306c5d1f08b3363324367739ff247118a6d804da51062a4c0347f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
