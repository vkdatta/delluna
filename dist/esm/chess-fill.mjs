export const name="chess-fill";
export const id="dl_82a5ed8517593b2bd8b2";
export const url=new URL("../icons/chess-fill.svg?v=1513ef988b741e78ff0130e71993eae8da27dc3b4e4ad3d8a5fccc401bb0852e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
