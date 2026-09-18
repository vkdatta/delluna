export const name="recycling-fill";
export const id="dl_db8af33d8e494205b72e";
export const url=new URL("../icons/recycling-fill.svg?v=c22ad662dd7fbdfc24a3929c07f6d92bdae44cade2adb8d819ef8453140616d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
