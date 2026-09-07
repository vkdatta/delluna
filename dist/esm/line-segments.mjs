export const name="line-segments";
export const id="dl_39a5ea9d64c8470a9b05";
export const url=new URL("../icons/line-segments.svg?v=670f74ac83b78eee732dd830df670074c53c3f396d2d64dbcf12c4241c6470a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
