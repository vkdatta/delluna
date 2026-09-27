export const name="desktop-tower-thin";
export const id="dl_0e240f13d7f54571ac1c";
export const url=new URL("../icons/desktop-tower-thin.svg?v=c7f76d8143cfd47405270dd3c7396f7532abdeb0c97b324ea5ad39817233c2df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
