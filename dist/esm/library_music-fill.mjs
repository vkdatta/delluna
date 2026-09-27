export const name="library_music-fill";
export const id="dl_3833b8e8c8e81f27366f";
export const url=new URL("../icons/library_music-fill.svg?v=f562422b762bac70b78d2d1fe91a93b33438f50c5d8ce40fd6dba626d5d1a273",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
