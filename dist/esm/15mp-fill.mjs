export const name="15mp-fill";
export const id="dl_39b3495825e84d12828a";
export const url=new URL("../icons/1/15mp-fill.svg?v=6b23ad5059d75905a72fb15ae716788c8c0f038d9ad7926101d3b3d5f77cc617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
