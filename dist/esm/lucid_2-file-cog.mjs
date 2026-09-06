export const name="lucid_2-file-cog";
export const id="dl_2ba0a588b3064d679bce";
export const url=new URL("../icons/lucid_2-file-cog.svg?v=457e6bdaf377bf2aeb8ae23fd0cd8abf144290be9e8969d6386f4ebc725bad2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
