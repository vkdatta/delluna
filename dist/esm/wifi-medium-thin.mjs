export const name="wifi-medium-thin";
export const id="dl_9fdaa11883254b7a81c7";
export const url=new URL("../icons/W/wifi-medium-thin.svg?v=d3aeedd644d4bcb2e3a46ca2fe7625dc292e09c031846b79197e21a517271921",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
