export const name="video_file";
export const id="dl_43d99c8674fa424498b2";
export const url=new URL("../icons/V/video_file.svg?v=fa2b2f904724c5d54624e99ec1cdde23b5a362fdfba07b5215af896da327e110",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
