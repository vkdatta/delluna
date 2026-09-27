export const name="arrow-elbow-up-right-fill";
export const id="dl_db0bbe4258ae46f3826a";
export const url=new URL("../icons/arrow-elbow-up-right-fill.svg?v=2663eeb281e58e76e26ca4e261a2bfecb2ab6f994627702879116c45d0de63b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
