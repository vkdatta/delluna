export const name="mobile_3-fill";
export const id="dl_bdd92732c0a5f27f916a";
export const url=new URL("../icons/mobile_3-fill.svg?v=2468422afab9c61d214403df7e88591bb1ddd9bfeff5a961ac6706caa022877c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
