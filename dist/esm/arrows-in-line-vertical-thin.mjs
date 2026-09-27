export const name="arrows-in-line-vertical-thin";
export const id="dl_38d777b81e8749349547";
export const url=new URL("../icons/arrows-in-line-vertical-thin.svg?v=1737dee67660c6d2a99b1ede02716bff49b140b704d6623160c4457649433362",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
