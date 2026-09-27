export const name="expand_circle_down-fill";
export const id="dl_3ce31b5567a490f2cef0";
export const url=new URL("../icons/expand_circle_down-fill.svg?v=11c9c1d3ca369670ad1eb1852790a3e7ab81862cd3b14e4512a02a34e3f31e0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
