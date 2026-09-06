export const name="lucid_3-square-dashed-bottom-code";
export const id="dl_e981aa004fe4410ba929";
export const url=new URL("../icons/lucid_3-square-dashed-bottom-code.svg?v=00aaa4394bfc15230adc6271e3a835fca7e5f1fb39b566aa8a7b63f48af43012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
