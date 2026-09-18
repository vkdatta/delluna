export const name="skillet_cooktop-fill";
export const id="dl_29edf505adfa4cbb99aa";
export const url=new URL("../icons/skillet_cooktop-fill.svg?v=c05d35461d553e4df4478730236ffb51e935786724ecdd8878dd329dd8394df9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
