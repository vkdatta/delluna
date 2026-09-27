export const name="circles-fill";
export const id="dl_82285ef6e4183e3c33c9";
export const url=new URL("../icons/circles-fill.svg?v=6a9302e35f3bb94d1b6d8b689dc8335723522f58750cdc11f21e7f05331d9222",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
