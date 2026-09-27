export const name="syringe-duotone";
export const id="dl_dbb32c01db3ca80687fa";
export const url=new URL("../icons/syringe-duotone.svg?v=df41219b341f5baebea1b24c1b218bab63b8ef98a205a4d5bfab03dd1a3cedab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
