export const name="crown-cross-fill";
export const id="dl_85ebfc77af8d4a4a9da7";
export const url=new URL("../icons/crown-cross-fill.svg?v=c00d15ed89fb6d0464121fa08301f720c4c9a12fdd7509272804c8f52ea2ef22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
