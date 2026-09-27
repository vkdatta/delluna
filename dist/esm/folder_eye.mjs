export const name="folder_eye";
export const id="dl_0bf0d1d06ebd3f90fe6f";
export const url=new URL("../icons/folder_eye.svg?v=6789c8a2b71a40f84780d902089b2ed9577d87bcce80ebf1b1f70bdcc53d66f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
