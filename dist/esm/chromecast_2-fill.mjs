export const name="chromecast_2-fill";
export const id="dl_e967da6fc91cf97e2d64";
export const url=new URL("../icons/chromecast_2-fill.svg?v=8db05e04ee00e4f8818dd7637d0e04ec62817f73da06bdf118d92b564f4e8d27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
