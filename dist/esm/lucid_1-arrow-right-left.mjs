export const name="lucid_1-arrow-right-left";
export const id="dl_8b11658e8b1c4aba9367";
export const url=new URL("../icons/lucid_1-arrow-right-left.svg?v=cbe36a8ea96c3d6ba4a3d0b1ec3dbdc4557e1777e36be2f221f1aa9fb3700422",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
