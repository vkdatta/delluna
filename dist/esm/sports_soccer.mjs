export const name="sports_soccer";
export const id="dl_b13566668cf79dc52ea7";
export const url=new URL("../icons/sports_soccer.svg?v=7226768269f988efe58b4e476214f2c98c7fd434758bc7cfebc4e94307eaad48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
