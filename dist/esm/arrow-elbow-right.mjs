export const name="arrow-elbow-right";
export const id="dl_3156363b922e4bc188a3";
export const url=new URL("../icons/arrow-elbow-right.svg?v=14f5e78a35006b1fd103ded8bc54a940e51e8a9674443333e4315f68b47ea8b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
