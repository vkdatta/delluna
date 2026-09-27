export const name="mobile_question-fill";
export const id="dl_e7889cdc67d3b04343dd";
export const url=new URL("../icons/mobile_question-fill.svg?v=54a7604705ff40341dc8c105d0da8c97907ad5c28bd8994d68ca3cfd44005488",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
