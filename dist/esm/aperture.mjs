export const name="aperture";
export const id="dl_4f0fb02c9dd3438a86d1";
export const url=new URL("../icons/aperture.svg?v=675667e18666df39bbb08ee11ffe97d64c633b44e808ca848f399306f700924e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
