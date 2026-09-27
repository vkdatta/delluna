export const name="dynamic_feed-fill";
export const id="dl_70c616e0e19f4245d32b";
export const url=new URL("../icons/dynamic_feed-fill.svg?v=98b921086bdadd596872f06fe586e4e186da4c2cc7a8ac82ed5f951f7f1b5f7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
