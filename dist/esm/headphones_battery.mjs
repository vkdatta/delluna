export const name="headphones_battery";
export const id="dl_8230ecfd1fa143f0a93e";
export const url=new URL("../icons/H/headphones_battery.svg?v=d3ae835c3c8546e622b0b8353ca83f95776ef1df15ad8a93cd334fd9f2a36764",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
