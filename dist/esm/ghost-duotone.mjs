export const name="ghost-duotone";
export const id="dl_f8d9b355a7e84711a16d";
export const url=new URL("../icons/ghost-duotone.svg?v=edfb8ed5c10444c0d1a6903845705422b7039008b3f9dc38cb8d56bc426dda3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
