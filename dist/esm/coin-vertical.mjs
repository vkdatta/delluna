export const name="coin-vertical";
export const id="dl_e7d2b2f97c3a4da1a60a";
export const url=new URL("../icons/coin-vertical.svg?v=4697ba3b8f687af50ccf6dab7566c77a6a18025fef6925c091796526a6ac816d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
