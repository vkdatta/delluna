export const name="spotify-logo-duotone";
export const id="dl_37faf059574ae5e0bc12";
export const url=new URL("../icons/spotify-logo-duotone.svg?v=9379b674fd4bf78293d108bd12523a4122a29f1d2f4e0a7cd0c39df56114b492",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
