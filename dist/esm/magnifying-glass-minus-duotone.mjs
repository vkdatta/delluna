export const name="magnifying-glass-minus-duotone";
export const id="dl_ffc05836b1184f6599e2";
export const url=new URL("../icons/magnifying-glass-minus-duotone.svg?v=897c9a4963d99072547345bb6ad94f93c56b87ea6d06eedb258c12d7a033a287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
