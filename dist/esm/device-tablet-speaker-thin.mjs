export const name="device-tablet-speaker-thin";
export const id="dl_6ee5fbd29df14665b154";
export const url=new URL("../icons/device-tablet-speaker-thin.svg?v=0e31d29bf74e7a33e6c6dd198104471d1d8009424cc7bc6ef2ed9a346f1dc6de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
