export const name="code_blocks";
export const id="dl_1ca7247276d7e4c52523";
export const url=new URL("../icons/code_blocks.svg?v=0961f605986c428e6f109f091d5b16b636659ec9a3f86959a5129778f5b14935",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
