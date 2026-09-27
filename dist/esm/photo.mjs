export const name="photo";
export const id="dl_7c4ffda6a2e5688e6e9a";
export const url=new URL("../icons/photo.svg?v=3969fb1582ccfd3bfd05887c5310971a0d9797b77887337d34d175260add7c96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
