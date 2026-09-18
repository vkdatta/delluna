export const name="mobile_text_2-fill";
export const id="dl_8f043ed8b138453481b0";
export const url=new URL("../icons/M/mobile_text_2-fill.svg?v=3547bdc10ebb1e106e8dcfadd6dd935aebe01b345f89657768f424bfa0115a2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
