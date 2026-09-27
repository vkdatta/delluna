export const name="arrow-u-left-down-light";
export const id="dl_c51b41f6dbf24809b022";
export const url=new URL("../icons/arrow-u-left-down-light.svg?v=54dc20ef7651fb0707b347a3487d6836e5046c9720b1e0de74bd219432993e79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
