export const name="auto_stories_off-fill";
export const id="dl_09a68c8a3f3707b86612";
export const url=new URL("../icons/auto_stories_off-fill.svg?v=a52242fbd841ae33bc8e27b02c55def068e9fb7d60fc7bbc758278953332de2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
