export const name="close_fullscreen";
export const id="dl_edfb6dac27213cb87a54";
export const url=new URL("../icons/close_fullscreen.svg?v=db0ba138dc7547364b4c2d34b08f3b47909eeefe1588385b3b95ffb8005a55e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
