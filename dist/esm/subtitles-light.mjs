export const name="subtitles-light";
export const id="dl_46f54d793cd2d243fb03";
export const url=new URL("../icons/subtitles-light.svg?v=357f95978e1e1e9d8a1fa69755c88a9ebbffbb25a0e6870271655c25a5b39232",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
