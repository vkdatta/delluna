export const name="dns-fill";
export const id="dl_34b8be6e8c194d02b836";
export const url=new URL("../icons/D/dns-fill.svg?v=598f33e1ba220795c7be7724b8a349efb23e0e635d8c501a1467cd9dfff4a38b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
