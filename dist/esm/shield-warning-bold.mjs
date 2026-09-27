export const name="shield-warning-bold";
export const id="dl_e0008dd18063c4366312";
export const url=new URL("../icons/shield-warning-bold.svg?v=ee4fd51adfe7f9833ee8b1128946961bbc1ba51124ed825aad48ae953ac6fc96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
