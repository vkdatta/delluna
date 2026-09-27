export const name="push-pin-slash-fill";
export const id="dl_16524367ab0b4adcb781";
export const url=new URL("../icons/push-pin-slash-fill.svg?v=2a0095de5b8332b788a69de37bc051225088e3f64c45cb9b9eb05141cb7ddb5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
