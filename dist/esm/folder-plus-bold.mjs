export const name="folder-plus-bold";
export const id="dl_03e3097471244bf68e79";
export const url=new URL("../icons/folder-plus-bold.svg?v=794360ef15d43df49fbf43f5f2b37eebca889f07df604411ea6874c80e6a0e16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
