export const name="tv_gen";
export const id="dl_0365ef410de54c988fa7";
export const url=new URL("../icons/T/tv_gen.svg?v=f66c088cab90d2db0e5bc23833e6a521054e5ff1ec511bebe166fa4ebb5a3288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
