export const name="swipe_vertical";
export const id="dl_ef20b761f3a00a25c708";
export const url=new URL("../icons/swipe_vertical.svg?v=6c904271babeacfa9c2781967db3f3dcfa10082c956df25e2b9a15ae86855b14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
