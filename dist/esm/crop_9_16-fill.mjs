export const name="crop_9_16-fill";
export const id="dl_05f354f702512969b45b";
export const url=new URL("../icons/crop_9_16-fill.svg?v=4bf84d95fbd35cff4e7838d20f49422f34ca3bafaadefa62ceb31dde20d1b261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
