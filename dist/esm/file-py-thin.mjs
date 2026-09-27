export const name="file-py-thin";
export const id="dl_97245c0971914bec8406";
export const url=new URL("../icons/file-py-thin.svg?v=f29caf7ffc003838460c8eaaa5c625671bccdd84f10402ef888343948db559a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
