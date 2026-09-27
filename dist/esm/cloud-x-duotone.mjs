export const name="cloud-x-duotone";
export const id="dl_59cebec58fa34b229881";
export const url=new URL("../icons/cloud-x-duotone.svg?v=287910620a7e83aa87df1b2499d186f81db205fecfd89360ae516f61f96e3397",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
