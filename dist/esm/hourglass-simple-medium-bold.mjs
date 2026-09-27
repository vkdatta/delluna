export const name="hourglass-simple-medium-bold";
export const id="dl_3d389fce6f5948fdbbbf";
export const url=new URL("../icons/hourglass-simple-medium-bold.svg?v=1d47d762f6f81ac6dfb25c6e8947e96ea5c92a42723a8e4d410d51485aa3db2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
