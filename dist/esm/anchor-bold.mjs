export const name="anchor-bold";
export const id="dl_4bd846c025d54273bef3";
export const url=new URL("../icons/anchor-bold.svg?v=4f35937e5291f3fb2bb07f2d760aabe02217dc37727d0492934f4096e0571dac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
