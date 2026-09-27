export const name="stylus";
export const id="dl_b9f0a293a2ce5091ba91";
export const url=new URL("../icons/stylus.svg?v=39b279724239b3f1cc88ae736a1da908d6f7a5eeba5b0c7a6e3c8c52b66bf888",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
