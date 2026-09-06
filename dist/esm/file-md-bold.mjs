export const name="file-md-bold";
export const id="dl_4cc3ab37d0af4c75a46c";
export const url=new URL("../icons/file-md-bold.svg?v=de222101806fbb4ed9270c87e68270c14fa8b25fdac28f5bebdc756fa478f944",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
