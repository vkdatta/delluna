export const name="coronavirus";
export const id="dl_3a11bcedd209005995a8";
export const url=new URL("../icons/coronavirus.svg?v=c6067a4cc3a3c45e73066189f8ef9df4901d633904c4e155b896de977238f97d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
