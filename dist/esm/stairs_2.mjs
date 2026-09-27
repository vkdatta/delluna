export const name="stairs_2";
export const id="dl_f6456d84a0767144cc78";
export const url=new URL("../icons/stairs_2.svg?v=88fe8464c4d62c3e1f1ec643c87b3bcf46f7dd1f85d45e8d8b893c5f403d0fac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
