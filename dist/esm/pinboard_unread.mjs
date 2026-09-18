export const name="pinboard_unread";
export const id="dl_599bcecbf37b44eba6ea";
export const url=new URL("../icons/P/pinboard_unread.svg?v=c5be3fbf5a35443501b4afb3df801d9f43b3838ae88f697ad7406846b5d9c534",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
