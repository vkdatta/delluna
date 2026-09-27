export const name="files-bold";
export const id="dl_f544ea2bb2c2406d808a";
export const url=new URL("../icons/files-bold.svg?v=5939362d4ead15468d0b1d6b8f3fb292ccdcbf6431c47cea68514bafa3cd51aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
