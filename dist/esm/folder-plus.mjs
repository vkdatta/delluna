export const name="folder-plus";
export const id="dl_06fb9c3d67db4139aeb2";
export const url=new URL("../icons/folder-plus.svg?v=576f2e68f6adf880e3334363b1d3baa2bd07ef41b7ae04a77cbe4eea240e62df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
