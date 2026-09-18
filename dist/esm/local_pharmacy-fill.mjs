export const name="local_pharmacy-fill";
export const id="dl_f4b3918f557e427e8c4f";
export const url=new URL("../icons/L/local_pharmacy-fill.svg?v=5d02916c6e3c5beb01b16cc5dc11edec3cb73fb703fdb0fedc390b60f9fd5efd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
