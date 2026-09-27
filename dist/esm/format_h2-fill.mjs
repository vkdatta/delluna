export const name="format_h2-fill";
export const id="dl_96042f55e36a89a3739a";
export const url=new URL("../icons/format_h2-fill.svg?v=e1e9961a9637c31a949c722f868c533a31eb5efd2d4b1e906692c2d5ce66ab57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
