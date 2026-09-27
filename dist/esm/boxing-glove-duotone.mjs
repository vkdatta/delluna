export const name="boxing-glove-duotone";
export const id="dl_e3e10d64a9394783992c";
export const url=new URL("../icons/boxing-glove-duotone.svg?v=a6f010862b0952829a0ecacd590a895eff04355c434c4266eefae32d3373ff97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
