export const name="arrows-clockwise-bold";
export const id="dl_9020b335aaf24fc3b89d";
export const url=new URL("../icons/arrows-clockwise-bold.svg?v=8989a4bca37fab2487ab122ec70d89af4f78982d3a1e205e57e8bf3439925c1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
