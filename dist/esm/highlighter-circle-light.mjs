export const name="highlighter-circle-light";
export const id="dl_b0feae7dc841494589f8";
export const url=new URL("../icons/highlighter-circle-light.svg?v=4b229d59500b966c66b20bce82cfa7d4fdf900ecdb19aaccbd3e2d3f0873662e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
