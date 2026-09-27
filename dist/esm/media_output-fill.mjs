export const name="media_output-fill";
export const id="dl_50b41edcb5c6b75e109c";
export const url=new URL("../icons/media_output-fill.svg?v=dec1f56671d176f85fc09960e29fa60ae0a7255d95690be980ad882305b79f3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
