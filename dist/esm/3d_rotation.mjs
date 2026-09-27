export const name="3d_rotation";
export const id="dl_11367e2596e88c846132";
export const url=new URL("../icons/3d_rotation.svg?v=fe1d3d854ad4d697e6c0dea4dde895c3b24745430f8ba0c9846c27562a9a1fcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
