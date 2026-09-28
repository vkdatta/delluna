export const name="iframe_off-fill";
export const id="dl_5257b8539e07beab7159";
export const url=new URL("../icons/iframe_off-fill.svg?v=6c3b17e03c0235712dd37d73e11416023b5c1494f73d533ce7c7791aa889adda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
