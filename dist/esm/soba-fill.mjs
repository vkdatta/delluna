export const name="soba-fill";
export const id="dl_5871af2385e84591a633";
export const url=new URL("../icons/soba-fill.svg?v=79cb5a76c7ff5dffe1c69f48df2d2491f332be16b93cbb4df9a733f1c0138b8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
