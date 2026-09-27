export const name="bluetooth-connected-light";
export const id="dl_8a9d0fa10cfe48fe90c9";
export const url=new URL("../icons/bluetooth-connected-light.svg?v=585e6e335ea9c9b2682d5a8b1ea730a3b6b465c7a1f9d18085cacfbf02c19760",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
