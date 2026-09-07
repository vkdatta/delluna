export const name="voicemail-duotone";
export const id="dl_5b6e4a79a95d43dea1a9";
export const url=new URL("../icons/V/voicemail-duotone.svg?v=b8e15c99e0832b2ff8f99c324cfcb443953fcb349736ab617b73c2c0843e55f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
