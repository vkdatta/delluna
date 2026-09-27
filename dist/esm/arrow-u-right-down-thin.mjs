export const name="arrow-u-right-down-thin";
export const id="dl_5fd39a7cf73c4f68a01b";
export const url=new URL("../icons/arrow-u-right-down-thin.svg?v=c29cafd7bbfd78587c1c43415f16088cc2fb1281fe8ef209757ddc6a2f8d3eb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
