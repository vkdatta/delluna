export const name="upload-bold";
export const id="dl_7cb442b14677464c8fcb";
export const url=new URL("../icons/U/upload-bold.svg?v=742d6fe313624261a3332a2215fa018a839bbd8634350ee0cf5cbf62b8e9b234",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
