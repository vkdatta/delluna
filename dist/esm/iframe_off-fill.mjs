export const name="iframe_off-fill";
export const id="dl_211b16d86bbd43b4aee9";
export const url=new URL("../icons/I/iframe_off-fill.svg?v=6c3b17e03c0235712dd37d73e11416023b5c1494f73d533ce7c7791aa889adda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
