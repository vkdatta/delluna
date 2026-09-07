export const name="windmill-fill";
export const id="dl_a1a64ac68f894d96b3c4";
export const url=new URL("../icons/W/windmill-fill.svg?v=b345f6b2ff7fa774a0bd7e29de511b40cf4ce0cbae14d06d6ae49a1e79d4d0c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
