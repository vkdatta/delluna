export const name="file_present-fill";
export const id="dl_43426d6bf745d709c1ab";
export const url=new URL("../icons/file_present-fill.svg?v=440b7a4ae48d97f4aa55701858f58b2cde6afd1d96a0e9cc8d793f66aa107f20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
