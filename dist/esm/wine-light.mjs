export const name="wine-light";
export const id="dl_59231955887d4149ade7";
export const url=new URL("../icons/W/wine-light.svg?v=639e7d29481115586b4ee1236ecda800b4bc6b20b1e13bfb79237da96c074809",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
