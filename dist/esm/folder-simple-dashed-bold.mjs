export const name="folder-simple-dashed-bold";
export const id="dl_79406ed8df044443866b";
export const url=new URL("../icons/folder-simple-dashed-bold.svg?v=2d02d627c098f5eec6ae19e95b331e36cc608e143d52ed87e4f365cce6666758",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
