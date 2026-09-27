export const name="gear-duotone";
export const id="dl_c756f081e6324669b219";
export const url=new URL("../icons/gear-duotone.svg?v=ea5774ab6fd205da24ca9aa903ce07cb853b5c155f31603d364775758a6d6771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
