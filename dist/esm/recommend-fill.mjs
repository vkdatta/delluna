export const name="recommend-fill";
export const id="dl_a51a2ce9aab305040bfb";
export const url=new URL("../icons/recommend-fill.svg?v=e97c3b51c44f0a4dba3a03852dabfced3d43f54c54d1dc0e3274498e4636be66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
