export const name="line_end_diamond-fill";
export const id="dl_00598eb318addbb98ddb";
export const url=new URL("../icons/line_end_diamond-fill.svg?v=114168c8ddab83db7ae31d23300154ba02f7eebda28346e6a6c268e5a29290df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
