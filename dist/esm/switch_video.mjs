export const name="switch_video";
export const id="dl_9da0632f236d740cfb43";
export const url=new URL("../icons/switch_video.svg?v=44b1f3eae014e99724e3f166028c1e02ebdd52de587c95a91fd6073e7531171b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
