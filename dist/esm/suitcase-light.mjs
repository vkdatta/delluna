export const name="suitcase-light";
export const id="dl_ca9d7744504cb03d957b";
export const url=new URL("../icons/suitcase-light.svg?v=3344a77f9060aed94422536a7d87c276e8dc28c42adf765a668fa87ad85c7751",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
