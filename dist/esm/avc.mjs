export const name="avc";
export const id="dl_9586fcfada2185ab89d9";
export const url=new URL("../icons/avc.svg?v=3598383c4d40314667fa8b39d8c2204a244e48c4949913bd30157b452265832f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
