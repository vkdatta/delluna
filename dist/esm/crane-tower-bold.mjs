export const name="crane-tower-bold";
export const id="dl_6b93d90521a84ad2a6fb";
export const url=new URL("../icons/crane-tower-bold.svg?v=65317b56872bc70ee20de01ecb4f60be420340465e555124e5513dff68a0fbf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
