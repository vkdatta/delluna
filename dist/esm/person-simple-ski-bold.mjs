export const name="person-simple-ski-bold";
export const id="dl_45471e4b097044cc87d0";
export const url=new URL("../icons/person-simple-ski-bold.svg?v=d905297742d88f8bf38caee27d1a183d87961c5a5bd5b9b7ec5d2ba5c3fea0cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
