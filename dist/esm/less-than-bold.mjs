export const name="less-than-bold";
export const id="dl_6c256ae87fcb4678a997";
export const url=new URL("../icons/less-than-bold.svg?v=c615083bea0818ef5ee6990a9b84fcd4ef7857b1c52bf2feaf9a0fb3c55c0085",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
