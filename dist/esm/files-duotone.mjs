export const name="files-duotone";
export const id="dl_10a091b7b91d4d95ac2a";
export const url=new URL("../icons/files-duotone.svg?v=791c05a0309a1deb0cb86824d1d7f3b3bb278263b82902f59afb1fc84df5115a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
