export const name="forward-fill";
export const id="dl_3bc7a7febad4399b07b8";
export const url=new URL("../icons/forward-fill.svg?v=c9cf591e1cf8d3340011c1239505128b29bb2c7d58c0b9aab2980af4ce37004c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
