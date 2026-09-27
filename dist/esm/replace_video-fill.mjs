export const name="replace_video-fill";
export const id="dl_5ecab4ebee2876eea0ea";
export const url=new URL("../icons/replace_video-fill.svg?v=6d9ed2a8b932fd4baa3405c57fddbbe19aa36a3a51986027b6450ffe02534702",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
