export const name="arrow-arc-left-bold";
export const id="dl_de8b282338884b3490cd";
export const url=new URL("../icons/arrow-arc-left-bold.svg?v=b51e6ef6ca3d63163f97a30904fb061818d1bbf9f0be13713e8c2af3417607c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
