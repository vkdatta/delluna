export const name="toolbar-fill";
export const id="dl_887c43df1bc1999600a3";
export const url=new URL("../icons/toolbar-fill.svg?v=e35323180d680e23c20106a9b3d9cc4bb9656fcf03159d8e12ed9d46bc3344b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
