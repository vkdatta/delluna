export const name="text-superscript-fill";
export const id="dl_dea8f4e86446f9f3d297";
export const url=new URL("../icons/text-superscript-fill.svg?v=8bd99bc5ec7ea20c975b20a487e839a37ba02961eb32a4ae305f21d546f26d9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
