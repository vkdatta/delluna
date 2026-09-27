export const name="bluetooth-slash-fill";
export const id="dl_0419b33f30f7442e8615";
export const url=new URL("../icons/bluetooth-slash-fill.svg?v=bc02e9151129cf8437fc0879219be67e7034c19f0f26c59a96a65dcce8bd83a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
