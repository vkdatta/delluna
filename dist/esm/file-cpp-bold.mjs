export const name="file-cpp-bold";
export const id="dl_2f6c12d6d432487d896b";
export const url=new URL("../icons/file-cpp-bold.svg?v=feb54f0ce21956861bef92353bdcb31de41ce223896603b982f32c008705ed1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
