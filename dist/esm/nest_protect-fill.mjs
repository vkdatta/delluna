export const name="nest_protect-fill";
export const id="dl_3d72c87e868d41da81e6";
export const url=new URL("../icons/N/nest_protect-fill.svg?v=38ba61a7e4dbeeebe3c21df960a13f97f322f5c7bd50a505cf23725baca01f49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
