export const name="lucid_1-blend";
export const id="dl_dd41c9fc6f6f4ccc8148";
export const url=new URL("../icons/lucid_1-blend.svg?v=12a7f1c3f24ab29f4d53cffe9e79090d76a2b019579414fa0c260248d52162d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
