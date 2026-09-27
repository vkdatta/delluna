export const name="arrow-counter-clockwise-fill";
export const id="dl_81fc4856073e4feb89b0";
export const url=new URL("../icons/arrow-counter-clockwise-fill.svg?v=ca97536556374c6b1a5567a71e9b1fe7aa72f10109a473fae59a2c38446c7632",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
