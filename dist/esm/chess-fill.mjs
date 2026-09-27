export const name="chess-fill";
export const id="dl_ee78e06968aaf0faf9f7";
export const url=new URL("../icons/chess-fill.svg?v=9bdc88b5d9663dec656e37e44e91524f3d276ca50f97f44e0f2921bb1a7d6f07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
