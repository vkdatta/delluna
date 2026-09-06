export const name="airplay-thin";
export const id="dl_9f4ebaaeae5047118c6f";
export const url=new URL("../icons/airplay-thin.svg?v=bff432ec859c19d6e151537e823c6a5814a846651b990290b17d624d86ff1de9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
