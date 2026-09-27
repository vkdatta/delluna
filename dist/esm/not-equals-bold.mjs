export const name="not-equals-bold";
export const id="dl_0800e47993ed457ebed2";
export const url=new URL("../icons/not-equals-bold.svg?v=42cc5522293624fc00acf904f7c946e399ce4a8a23559102868cb22b8599cbf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
