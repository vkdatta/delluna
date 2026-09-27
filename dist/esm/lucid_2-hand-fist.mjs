export const name="lucid_2-hand-fist";
export const id="dl_76c96203e09e4217a22a";
export const url=new URL("../icons/lucid_2-hand-fist.svg?v=ee56c1c640fd1d1ff55c52e827412e92dede3373d1c0cc9e9d370ff69a0d9a60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
