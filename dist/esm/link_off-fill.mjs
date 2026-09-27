export const name="link_off-fill";
export const id="dl_703118edfbdfbd579a20";
export const url=new URL("../icons/link_off-fill.svg?v=c3a2825e370d80b19442ca6fd26c43ef1081038166a6cf04f7eabd67ce31abdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
