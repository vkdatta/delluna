export const name="article-ny-times-duotone";
export const id="dl_d9e238c14dbf46a59a0b";
export const url=new URL("../icons/article-ny-times-duotone.svg?v=41fe2bea4f5bbeca365469544d363cecd2c3d8b1a6709a4f39d62a996a19de04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
