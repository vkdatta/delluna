export const name="folder-simple-bold";
export const id="dl_7ed267c32d83496d8c01";
export const url=new URL("../icons/folder-simple-bold.svg?v=b676d5afa7ab798570acf54e9a716680a5063b0c04604a023b6d8b6bca77e258",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
