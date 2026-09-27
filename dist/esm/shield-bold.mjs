export const name="shield-bold";
export const id="dl_fa485c8f5f0a9fdb7f01";
export const url=new URL("../icons/shield-bold.svg?v=f787f4f3faee796ca6ab027c299f514cac30ffce93828ece9754f7ce5cace22e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
