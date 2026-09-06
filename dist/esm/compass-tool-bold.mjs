export const name="compass-tool-bold";
export const id="dl_3bc5ac9cb51945c79c52";
export const url=new URL("../icons/compass-tool-bold.svg?v=d287cfb2bf66a27a4ac7822dedf2a2ab5f78fe8c71f2030b3d2a658e2d82f2cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
