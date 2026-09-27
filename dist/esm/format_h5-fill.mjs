export const name="format_h5-fill";
export const id="dl_97d3a011419b50ce9d04";
export const url=new URL("../icons/format_h5-fill.svg?v=2844b0cfc1569a74b81eb0777edd138925f6af5cc037f9f39a63ed48465ebdd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
