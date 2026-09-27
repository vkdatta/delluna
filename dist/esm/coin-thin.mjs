export const name="coin-thin";
export const id="dl_84a8235729314bbdb3e7";
export const url=new URL("../icons/coin-thin.svg?v=5866abebb360b5a4f646bfcbefc5baaa2ea30074546736323599262d7d6153e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
