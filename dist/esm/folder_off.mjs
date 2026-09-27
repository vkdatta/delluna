export const name="folder_off";
export const id="dl_4f5a12c26fd5d5316bbc";
export const url=new URL("../icons/folder_off.svg?v=490ea38b2a19986b2732cdaba270b08e2175acd1c6b07780021e3d6da263b404",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
