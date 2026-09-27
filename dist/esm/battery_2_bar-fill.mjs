export const name="battery_2_bar-fill";
export const id="dl_7c5dc023009cbe146264";
export const url=new URL("../icons/battery_2_bar-fill.svg?v=2bb0a8f14e9d6706fde63b248edee9fc98ff5b4aa6a0c552f49243d78e0a190f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
