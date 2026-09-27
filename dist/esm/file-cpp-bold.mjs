export const name="file-cpp-bold";
export const id="dl_2f6c12d6d432487d896b";
export const url=new URL("../icons/file-cpp-bold.svg?v=9d337c9407838cbf7b46d0bebfa8e7a462e683a77ddcadb9b94165861c9d7c1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
