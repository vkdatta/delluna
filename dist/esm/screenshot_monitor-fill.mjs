export const name="screenshot_monitor-fill";
export const id="dl_23e145daf940f1d7ec6c";
export const url=new URL("../icons/screenshot_monitor-fill.svg?v=f9eee0a7d8aa16b8d3548bdb03b973101c69abcae7b7ce8f468786bcdd26d7c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
