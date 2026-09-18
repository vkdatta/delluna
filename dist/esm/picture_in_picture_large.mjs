export const name="picture_in_picture_large";
export const id="dl_9b3deb8a26d049a6a14f";
export const url=new URL("../icons/picture_in_picture_large.svg?v=212c5671c63914fa13ce20ae809ba1401bf195dd6ab8f95a4412f821cd872f26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
