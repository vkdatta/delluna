export const name="50mp";
export const id="dl_c42cf8376d2d67ac8c28";
export const url=new URL("../icons/50mp.svg?v=4b379bf68e296ce236350185e862b4df7501993de86f7e8dae1a44ef2db210ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
