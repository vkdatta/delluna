export const name="file-light";
export const id="dl_8ffbef1938964e7d8149";
export const url=new URL("../icons/file-light.svg?v=cb5a5a6cc4696f43c6e40755b338842d009735140f5ef20560c824e5feb990f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
