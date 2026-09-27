export const name="champagne-thin";
export const id="dl_cb816a0021d44b6996e7";
export const url=new URL("../icons/champagne-thin.svg?v=bd004ba14ae434cffbd512801d770454248b1e6e9c944cb4b16cd45e33415770",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
