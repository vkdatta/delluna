export const name="wall";
export const id="dl_20e3f960f8fe229b1551";
export const url=new URL("../icons/wall.svg?v=48466e94722e934029b3f0b6cfc42d8e815521406a4e1ff213caf8c1bdab946c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
