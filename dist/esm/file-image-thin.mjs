export const name="file-image-thin";
export const id="dl_d66c4f65e8174a8082e0";
export const url=new URL("../icons/file-image-thin.svg?v=8fa4fcb6403cbebf77351d524e052ffba64c241a7fef583f135a0834f682ae86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
