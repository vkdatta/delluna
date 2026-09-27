export const name="text-t-duotone";
export const id="dl_8068f10b2ae79d443446";
export const url=new URL("../icons/text-t-duotone.svg?v=6f81c5f8400c1fa8267c8916058cf96fd0c8e86d0463e08f05903a46c10fdbe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
