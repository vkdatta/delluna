export const name="track_changes";
export const id="dl_52a5975ed8a2463d8580";
export const url=new URL("../icons/T/track_changes.svg?v=e8a6ccdca679862f433d22cd902ecc2b5a1b1458984d6fedb70ef2d8250364f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
