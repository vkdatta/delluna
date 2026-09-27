export const name="battery-vertical-high-light";
export const id="dl_1be1a391a1464e2ebff4";
export const url=new URL("../icons/battery-vertical-high-light.svg?v=90027988af33c8ae3ce7947a024ea1c60441165a1c44d1804114a356cbb9d1ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
