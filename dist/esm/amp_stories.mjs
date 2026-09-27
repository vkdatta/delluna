export const name="amp_stories";
export const id="dl_142f95f913a10422fdf8";
export const url=new URL("../icons/amp_stories.svg?v=53f78d619b79151319b175c57826e81006d6b66488a755b27e20252cc6876659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
