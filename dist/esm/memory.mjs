export const name="memory";
export const id="dl_e130555af48e4eb9bed8";
export const url=new URL("../icons/memory.svg?v=3cd7a6db66298861c44e485fb38cfe3d82a485f29f42d78a37000f53dbe7e79d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
