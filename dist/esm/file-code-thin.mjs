export const name="file-code-thin";
export const id="dl_37d59867dd804775b322";
export const url=new URL("../icons/file-code-thin.svg?v=67a505859bb9613baefa3392d2673ac657afac08c0382904f4d2601f12c66fb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
