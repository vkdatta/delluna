export const name="crop_9_16-fill";
export const id="dl_74667a3ebea44c0da005";
export const url=new URL("../icons/crop_9_16-fill.svg?v=7cd176f4b02e6f1e421ac7ecf5636d3e437e890093d8964067049512c3629e3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
