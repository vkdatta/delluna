export const name="ramen_dining-fill";
export const id="dl_79bc22ce26dda96c7354";
export const url=new URL("../icons/ramen_dining-fill.svg?v=95ffdeabae03e9145510119926622385f6143fa2832fac0d3fbf7f3d1f9b5c44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
