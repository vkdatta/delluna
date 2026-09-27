export const name="folder_eye";
export const id="dl_1e75593d161c3c6706c9";
export const url=new URL("../icons/folder_eye.svg?v=8a73fbbf80b0d0d47263771292bd0932b93c8ee482e459d2c5904860727dffae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
