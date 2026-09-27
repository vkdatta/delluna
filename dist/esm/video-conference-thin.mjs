export const name="video-conference-thin";
export const id="dl_c1441d3780a45c6f73a1";
export const url=new URL("../icons/video-conference-thin.svg?v=70b072121b41c9ff4a9a9c85fb81824d6b41b2128820e07f75a47b153d0bc897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
