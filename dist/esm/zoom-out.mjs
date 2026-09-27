export const name="zoom-out";
export const id="dl_9a9dfb683b3d4611affb";
export const url=new URL("../icons/zoom-out.svg?v=22c477862d9a6a1e59362d686540752fde78221766ad6be64175fbbc4bc596d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
