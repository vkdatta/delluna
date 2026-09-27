export const name="battery-vertical-full-light";
export const id="dl_19367b01ff2b49d984d0";
export const url=new URL("../icons/battery-vertical-full-light.svg?v=885294ac0f61b52e39663519bfc90ab0bfb696677b2696febcd61b9dfecdbf69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
