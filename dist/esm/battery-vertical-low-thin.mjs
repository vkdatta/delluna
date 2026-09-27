export const name="battery-vertical-low-thin";
export const id="dl_bacff225d219493cb39a";
export const url=new URL("../icons/battery-vertical-low-thin.svg?v=c68c0c2bfd02b6755f662faf0a482440c7d629783b8ea810d515705d82b81a81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
