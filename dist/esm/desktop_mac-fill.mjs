export const name="desktop_mac-fill";
export const id="dl_7b7152dcb6d9017e7166";
export const url=new URL("../icons/desktop_mac-fill.svg?v=9fd0db64557a36898774de0cfeb4e1a1c200a19feb1f634bf323c67c2b8812f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
