export const name="mobile_unlock-fill";
export const id="dl_8c7e364cc372c92e20d4";
export const url=new URL("../icons/mobile_unlock-fill.svg?v=b0d2d991331a20f3e548fb77994e660f009a10908dae56f8881362a630189462",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
