export const name="file-html-light";
export const id="dl_950b4d9cd31d4bf687fb";
export const url=new URL("../icons/file-html-light.svg?v=b0cca50ec42ccb328af570af1a6e23cffd926b84df433b390cd3ddf2da3aadf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
