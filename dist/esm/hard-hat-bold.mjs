export const name="hard-hat-bold";
export const id="dl_caf0746868ea400dadfc";
export const url=new URL("../icons/hard-hat-bold.svg?v=9f0e3f1b2c3b513cd62a74d419e37cc4b8382171628904b82614a07a0ebf8e79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
