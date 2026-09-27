export const name="hourglass_arrow_up-fill";
export const id="dl_b423a832402a66e6436c";
export const url=new URL("../icons/hourglass_arrow_up-fill.svg?v=c07cc0098fab918ba9a348b39a7cb5f6402b0821751351e22f0153036e032c66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
