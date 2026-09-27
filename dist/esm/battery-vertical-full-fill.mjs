export const name="battery-vertical-full-fill";
export const id="dl_8ca93062cf0a424884c5";
export const url=new URL("../icons/battery-vertical-full-fill.svg?v=c797b060ae8a4241d5f02d63bbb6bb05d6a1fce891bd33e9d64a3e1eb09c7142",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
