export const name="pants-duotone";
export const id="dl_da4d976d18d74c39bd4c";
export const url=new URL("../icons/pants-duotone.svg?v=ca13766f2d1062ab35af6f33e165de7654f491080762172b4b1d840997b8846d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
