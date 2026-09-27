export const name="arrow_cool_down";
export const id="dl_581e410385945f4cf614";
export const url=new URL("../icons/arrow_cool_down.svg?v=f67e4d3f0d475439b0d064791980bccbf07a8e2e4529cbe3f1196ee7d12f9545",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
