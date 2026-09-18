export const name="css";
export const id="dl_c6f3f9408a1173c78a74";
export const url=new URL("../icons/css.svg?v=6f6e522cf3007a72a299d177ae42176070c17ceac1586ab79e3ebb3f3399f045",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
