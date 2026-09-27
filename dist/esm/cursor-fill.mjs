export const name="cursor-fill";
export const id="dl_fbcbca775dde4d0e8110";
export const url=new URL("../icons/cursor-fill.svg?v=847217240e760470e6db8b13f1b3b72d78ea1a1ba19ab49d02f35da355494cc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
