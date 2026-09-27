export const name="for_you";
export const id="dl_4281739cbd0f84aa1c31";
export const url=new URL("../icons/for_you.svg?v=9b213f1b32c7b0a6322aa7e287b09ce03bcec1440c8e84c16316ebae7fe7b663",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
