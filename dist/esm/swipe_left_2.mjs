export const name="swipe_left_2";
export const id="dl_17a6bc549897900d1560";
export const url=new URL("../icons/swipe_left_2.svg?v=825a9ede7a72c8c662f45e70d33bf75a581f03ac8c36e1ddb450d3abdb91f57e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
