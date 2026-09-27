export const name="bridge";
export const id="dl_7c165ba24cc045aaa4e9";
export const url=new URL("../icons/bridge.svg?v=bdb8a73c9e7d1b150ff27ff7bcfe784c4f60a40c0b18ee80d099ccf1c5ad2d39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
