export const name="tray-arrow-up-thin";
export const id="dl_35241edfd41645ac87ab";
export const url=new URL("../icons/T/tray-arrow-up-thin.svg?v=f73719ff0c59c3bdcddeb4ef452f76c2c099ff306dcf2b725aa3002fb4a69bb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
