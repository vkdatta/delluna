export const name="lyrics-fill";
export const id="dl_768c6b883dbf062dbdd0";
export const url=new URL("../icons/lyrics-fill.svg?v=0cacea316847d55eaed52a0e75f7fc409a7cbe7363219c479a0db79edeeb496c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
