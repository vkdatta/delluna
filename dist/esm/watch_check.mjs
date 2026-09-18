export const name="watch_check";
export const id="dl_a3876a064a114f598154";
export const url=new URL("../icons/watch_check.svg?v=63b7688acc874084cd5effcba579cca9f5e12f37aef105ea61f6fbf578294d3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
