export const name="file-archive";
export const id="dl_a0607eacc27147bd9707";
export const url=new URL("../icons/file-archive.svg?v=d753fe7a6e30fbfbfcbe5a837678a8e815eeae28b85c2d1af4fab8663fcfdd0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
