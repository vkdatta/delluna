export const name="drop";
export const id="dl_62fb8c23847f42c4995f";
export const url=new URL("../icons/drop.svg?v=2b5396d046ce74fc645c6064226dd4875cf5e98eb1c7372611bf069f1adbc5aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
