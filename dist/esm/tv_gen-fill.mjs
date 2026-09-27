export const name="tv_gen-fill";
export const id="dl_867a653cbd533929886d";
export const url=new URL("../icons/tv_gen-fill.svg?v=c9db8be8d769ae004d3575fdcb91ec42ccfa459557b6e083f92a7f1392c0bef1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
