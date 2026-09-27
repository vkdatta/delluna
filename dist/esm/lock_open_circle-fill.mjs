export const name="lock_open_circle-fill";
export const id="dl_7dbadeec2467b1825802";
export const url=new URL("../icons/lock_open_circle-fill.svg?v=2ff9a97d60f098660445cb998c91a6c675ca9e70f85c5d11e54278d3427f5f20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
