export const name="infinity-thin";
export const id="dl_7d37b46e6d3149228b8e";
export const url=new URL("../icons/infinity-thin.svg?v=237ea5d06b8b2c4485e62199ca9945e43096140d2fede8e6f07c9cb4492cd4a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
