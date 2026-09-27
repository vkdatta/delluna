export const name="arrow-square-right-light";
export const id="dl_eb4b89cf99444dfba6f0";
export const url=new URL("../icons/arrow-square-right-light.svg?v=674cf65745edbd94dcf2fd5cbe8fafc510318da995f55c2529f7aaf788a77f76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
