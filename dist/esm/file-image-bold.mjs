export const name="file-image-bold";
export const id="dl_3d2e86c81077493da408";
export const url=new URL("../icons/file-image-bold.svg?v=69412860d6cee9513b09f86c00edf61072067a43d492a06b58329a07d05c19d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
