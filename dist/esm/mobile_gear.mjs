export const name="mobile_gear";
export const id="dl_74be59bc310a1b543d52";
export const url=new URL("../icons/mobile_gear.svg?v=73fcfb1301f0663a1d6eb2f96b985d0d3edf549e36ed7c1d2414b665f3a69cfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
