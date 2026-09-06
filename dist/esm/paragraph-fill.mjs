export const name="paragraph-fill";
export const id="dl_074c682d0a0041e79f5b";
export const url=new URL("../icons/paragraph-fill.svg?v=fd0588453ba4d1f1454b82cd06fc893053e9705adc32775786519d23f02c6d79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
