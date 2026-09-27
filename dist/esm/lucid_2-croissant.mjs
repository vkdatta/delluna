export const name="lucid_2-croissant";
export const id="dl_f65963e3d38b4cc2bea4";
export const url=new URL("../icons/lucid_2-croissant.svg?v=0ae4e06d4a4e2459f6b260f93fafb6241c4f96a7f09fe26cd8cf61afbc91ccf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
