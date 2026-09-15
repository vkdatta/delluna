export const name="endocrinology-fill";
export const id="dl_af630eeb7a6d424085e8";
export const url=new URL("../icons/E/endocrinology-fill.svg?v=db92a74f88636242cbce40ac2f6a0006e99d502a5d08ed9fa6a68e4069dab64b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
