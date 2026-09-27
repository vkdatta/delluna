export const name="test-tubes";
export const id="dl_2b1a2a69c29f4ec68503";
export const url=new URL("../icons/test-tubes.svg?v=ac5810c3fa80232624894aa66d39ad758fa3a1b62f90a5d646872062deadcab4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
