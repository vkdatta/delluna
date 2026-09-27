export const name="up";
export const id="dl_47d6795d396f2a6e4a55";
export const url=new URL("../icons/up.svg?v=52fb75fc6b1e0ebb2833d786fc15ba74997ace3cfb16c7bdb86ff617d844ef09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
