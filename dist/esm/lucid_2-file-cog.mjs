export const name="lucid_2-file-cog";
export const id="dl_2ba0a588b3064d679bce";
export const url=new URL("../icons/lucid_2-file-cog.svg?v=d6c4227b8bb95c59baf667b1ff064d105583059f29a6ac7db092c53252a85152",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
