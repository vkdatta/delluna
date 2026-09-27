export const name="align-left-simple";
export const id="dl_dd973dd371f44c74a5e8";
export const url=new URL("../icons/align-left-simple.svg?v=22021b44e0e3d7ee640387f0cd1d8c0ae70500647480248686122ddcb4627ca8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
