export const name="cleaning_bucket-fill";
export const id="dl_88c052b33545b5453be5";
export const url=new URL("../icons/cleaning_bucket-fill.svg?v=94b69db6325a08c58bb80a853d24fcd64043cb026f4717140455812474730728",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
