export const name="spinner-gap-fill";
export const id="dl_bb58ab4fa5e675d5b6ba";
export const url=new URL("../icons/spinner-gap-fill.svg?v=69a95a5ad057815081db7378c4da30ec25e034a988dca900d5b92a3331dd9dff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
