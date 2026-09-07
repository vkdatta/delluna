export const name="yin-yang";
export const id="dl_25a961adeffa41f2a7e4";
export const url=new URL("../icons/Y/yin-yang.svg?v=1e3e3674ddb1e90a3620533c762916e4301ce0817f1922c55fe9cb00187055be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
