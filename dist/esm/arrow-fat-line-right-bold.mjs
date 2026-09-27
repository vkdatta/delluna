export const name="arrow-fat-line-right-bold";
export const id="dl_fd27aa8fd2034dd9a28a";
export const url=new URL("../icons/arrow-fat-line-right-bold.svg?v=50028f5cefe979e8a8b7ca102706343cc217a7d92d02c6254dec0c63bffe7737",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
