export const name="back_hand";
export const id="dl_3af6d3f573ab25fa6e99";
export const url=new URL("../icons/back_hand.svg?v=f6d1d24b7d0f50785fd4c2a925fb53620b227be05227b3f4b41dce0d42d5921a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
