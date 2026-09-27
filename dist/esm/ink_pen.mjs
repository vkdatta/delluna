export const name="ink_pen";
export const id="dl_21b609297270d18254c1";
export const url=new URL("../icons/ink_pen.svg?v=d20f58870bde7cef4bf12ab28e67607b01090588b645116ac2a78ab64f9189b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
