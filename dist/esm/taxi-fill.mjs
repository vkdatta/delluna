export const name="taxi-fill";
export const id="dl_485edc1d196c485fb1e0";
export const url=new URL("../icons/T/taxi-fill.svg?v=5b0fcb03fa1bf56b8a701aece4017de93aebc9a62bd0ae938e3cef3b537cb015",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
