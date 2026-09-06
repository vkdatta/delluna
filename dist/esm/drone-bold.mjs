export const name="drone-bold";
export const id="dl_1b0d2f07217c41a29c81";
export const url=new URL("../icons/drone-bold.svg?v=cca2d3fbaae0ddff4ebce43815a3bdb38f5b5f61af4144aff60a6a0ce0a0f944",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
