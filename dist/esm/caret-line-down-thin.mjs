export const name="caret-line-down-thin";
export const id="dl_9b5762d9187b49b6967a";
export const url=new URL("../icons/caret-line-down-thin.svg?v=2ace1687fcf77cf1f39ce2e93e2d3b6d7107cfea49a357643d82dbe6f1a4f3e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
