export const name="tune-fill";
export const id="dl_27090ce6da2440568a65";
export const url=new URL("../icons/tune-fill.svg?v=e413b97b139d0cc79c469ad903591757af601a7a2ee0c70ca553d43c2af912f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
