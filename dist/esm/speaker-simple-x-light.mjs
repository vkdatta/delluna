export const name="speaker-simple-x-light";
export const id="dl_59d8ea86498a09b58ac5";
export const url=new URL("../icons/speaker-simple-x-light.svg?v=ad58fc478f49a6e1cbe7032bb2f87dbdee66b84f9f64e381d336d0bc37ecf0c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
