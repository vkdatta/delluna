export const name="notification_audio";
export const id="dl_6124ff4b6401afccc855";
export const url=new URL("../icons/notification_audio.svg?v=c39a08fa78218a25be385472821a48d7d614b83bf658befa743a2644536d825e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
