export const name="paint-brush-household-bold";
export const id="dl_367aed30cb2f464ebbd5";
export const url=new URL("../icons/paint-brush-household-bold.svg?v=0c342849710085ec477a240b5116a6173e82157a63807741e1e0dca3eef529ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
