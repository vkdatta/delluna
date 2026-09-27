export const name="computer-tower-duotone";
export const id="dl_57e603c080b34920be78";
export const url=new URL("../icons/computer-tower-duotone.svg?v=5b4a5b7f650c9b49717f591e32c13dfe5373b3e077b3813002b7746b7f8de932",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
