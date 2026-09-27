export const name="upload-simple-thin";
export const id="dl_392b3b57f6d5347ab59f";
export const url=new URL("../icons/upload-simple-thin.svg?v=27131f4e31d57980888b577d936cf54873942bf18fa8452f5de0a9f78e71c6c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
