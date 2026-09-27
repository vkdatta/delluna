export const name="edit_location_alt";
export const id="dl_ddfca0c45139c51caefe";
export const url=new URL("../icons/edit_location_alt.svg?v=2dc2ea373b2d60942002130bd9dcd167f29d6a1438e53b2a7949fd7fe2d43ee2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
