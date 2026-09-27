export const name="chrome_reader_mode-fill";
export const id="dl_5c299588e40d01dbd9fa";
export const url=new URL("../icons/chrome_reader_mode-fill.svg?v=eb0171c088a607be1efb26e469d127ed9f729fc55ec85a676562b8be767d34de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
