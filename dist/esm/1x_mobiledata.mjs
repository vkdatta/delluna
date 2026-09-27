export const name="1x_mobiledata";
export const id="dl_d1fab386929da8cd64e3";
export const url=new URL("../icons/1x_mobiledata.svg?v=8fb4bc2ebdf60db30e74dc338410a7a9a03b81e107daf1a68aa22fb303a92467",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
