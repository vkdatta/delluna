export const name="jar-label-fill";
export const id="dl_75ef0b3c177540889715";
export const url=new URL("../icons/jar-label-fill.svg?v=a9653950b7b5f49a2e0e617a9b21f60324d7dea3654232eb8313d29f3e452928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
