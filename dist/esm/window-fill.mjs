export const name="window-fill";
export const id="dl_44ef8bbc2a154e449ff5";
export const url=new URL("../icons/window-fill.svg?v=8f6e78d84b3cd8842e9047b7ea71c9daac39fb0ca30f77ce7033dc55ff04016b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
