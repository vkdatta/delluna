export const name="towel-light";
export const id="dl_fade6b4ba04e4431bda4";
export const url=new URL("../icons/T/towel-light.svg?v=f39399a2c764893421f56eceae49368feacf8e309ec0dab41a44c61c6ed47fcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
