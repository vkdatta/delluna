export const name="arrow-u-up-right-thin";
export const id="dl_c373d2de3c7f44bf92ba";
export const url=new URL("../icons/arrow-u-up-right-thin.svg?v=343617cb77db515228b34b458122059d13c55987c2c0094b1ff2a8814187c287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
