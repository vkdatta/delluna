export const name="width_full-fill";
export const id="dl_3fc6dbe5dfde991efe37";
export const url=new URL("../icons/width_full-fill.svg?v=af3c64eeed5e368574809ef1898980471abe88c694411f892e5ef35c42575a26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
