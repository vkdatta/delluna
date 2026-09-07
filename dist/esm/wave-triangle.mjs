export const name="wave-triangle";
export const id="dl_450c02e3812d4ddbbab5";
export const url=new URL("../icons/W/wave-triangle.svg?v=aaa5984b29160180dd7b65e9be8246a2c8be24245c358248b90723ba2c83a0ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
