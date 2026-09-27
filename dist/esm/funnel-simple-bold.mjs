export const name="funnel-simple-bold";
export const id="dl_e69392e9df3247d5a833";
export const url=new URL("../icons/funnel-simple-bold.svg?v=0ef396d54f2d62c00ddadc0e6d68b4a4919a106a0ed2e142ebdb77bdec132c85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
