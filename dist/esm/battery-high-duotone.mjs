export const name="battery-high-duotone";
export const id="dl_7e33de5a764d4b2c814e";
export const url=new URL("../icons/battery-high-duotone.svg?v=dbdd1dbd3a06ec76e211bdb22cf7daa341607ff82547e3987517843c767ef924",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
