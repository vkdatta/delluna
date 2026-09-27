export const name="shapes-duotone";
export const id="dl_5ca2b16b09095d482afb";
export const url=new URL("../icons/shapes-duotone.svg?v=f67a1a1efca055d3eec2de36b906ec4bf9260170af3bfe4299c168798c536e8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
