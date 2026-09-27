export const name="2mp";
export const id="dl_c14def4e4b92100e6fff";
export const url=new URL("../icons/2mp.svg?v=24c828baf444e0db38da07e2898aacbca694b6db94f60b4a2dd01b59b7de7e7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
