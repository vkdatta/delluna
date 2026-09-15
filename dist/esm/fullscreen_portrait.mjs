export const name="fullscreen_portrait";
export const id="dl_6d580313739c4926aa03";
export const url=new URL("../icons/F/fullscreen_portrait.svg?v=e0c420287235da8b8ca0e76837a7991ce9b7dba49e75a013e67ed14b67cea433",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
