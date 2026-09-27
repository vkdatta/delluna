export const name="spinner-gap-duotone";
export const id="dl_02a7c3003c65e5fe175f";
export const url=new URL("../icons/spinner-gap-duotone.svg?v=91dd4784c2d3b81529bd26f9e7a199d82f9f90575d9b412c757794fbd376b6fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
