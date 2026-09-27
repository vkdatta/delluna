export const name="clock-bold";
export const id="dl_2c896565bea64c599987";
export const url=new URL("../icons/clock-bold.svg?v=95eb68f3269249c012b65ea368886fafe661015a2230feddb156360c68f51f33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
