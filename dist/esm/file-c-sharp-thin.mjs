export const name="file-c-sharp-thin";
export const id="dl_e5e187480f6e456dbe04";
export const url=new URL("../icons/file-c-sharp-thin.svg?v=75cf433d272f5dfd123ccf63457a73ab2503634071c46668fade3d4483a6eddc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
