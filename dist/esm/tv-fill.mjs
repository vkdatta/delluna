export const name="tv-fill";
export const id="dl_8291dcc107f6d25c2638";
export const url=new URL("../icons/tv-fill.svg?v=5cb6f1a95094f02986e22aa425f6e46f4965f04d183e90563e26a54b84ee444c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
