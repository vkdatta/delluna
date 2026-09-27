export const name="photo_album-fill";
export const id="dl_19a33d92096f95af3460";
export const url=new URL("../icons/photo_album-fill.svg?v=793036bfb1414c37d3138841765a3ac3b5381fd77f38f92b8eb55ff36a8b3463",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
