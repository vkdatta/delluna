export const name="file-md-bold";
export const id="dl_4cc3ab37d0af4c75a46c";
export const url=new URL("../icons/file-md-bold.svg?v=35ae540a451bf6d9d06b22a58c005715bb02b1e6c62647777f59a3d2d02bc9aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
