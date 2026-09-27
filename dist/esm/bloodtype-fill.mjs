export const name="bloodtype-fill";
export const id="dl_5e8006719e0aa52e2617";
export const url=new URL("../icons/bloodtype-fill.svg?v=a672d8e6d933b7c031b71cf59f11fe548f61e4c9c70fa1ea7978aec28dbbd628",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
