export const name="resize-duotone";
export const id="dl_d55d5a8616184cfd88e3";
export const url=new URL("../icons/resize-duotone.svg?v=88c8aaf6c0dd9b085a13f2c18d8e0876ee69bad6ad8fa02b6e64c299416d19d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
