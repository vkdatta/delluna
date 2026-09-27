export const name="touch_long-fill";
export const id="dl_9f1436adc13e7f54e504";
export const url=new URL("../icons/touch_long-fill.svg?v=e46735e96de49ad49c9464ae4464daff20be977bdb2bc1deff72901d75056334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
