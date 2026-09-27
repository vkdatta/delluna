export const name="sd_card_alert";
export const id="dl_612a1b5b0c747750966e";
export const url=new URL("../icons/sd_card_alert.svg?v=52018fae0f39764d1a9c0d05e76e4b6d8973a92f80116632e5a575ec6eeea076",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
