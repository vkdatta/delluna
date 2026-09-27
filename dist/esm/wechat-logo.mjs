export const name="wechat-logo";
export const id="dl_d0617d3120d624e32241";
export const url=new URL("../icons/wechat-logo.svg?v=8e3e0f526c2b6ab5b5e911fd64335cd679f667b14cdfaa86c36baa7abeba791d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
