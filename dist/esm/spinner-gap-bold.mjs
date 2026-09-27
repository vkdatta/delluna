export const name="spinner-gap-bold";
export const id="dl_a222983b83b18729bdbd";
export const url=new URL("../icons/spinner-gap-bold.svg?v=f3e4e4331867c6b190336914c33d207ef18bb21a6ada74c03e91b4590119169d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
