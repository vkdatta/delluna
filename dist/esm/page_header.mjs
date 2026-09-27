export const name="page_header";
export const id="dl_827e43e1603d8c6f3d7e";
export const url=new URL("../icons/page_header.svg?v=88fd0039c749ff5df733a4ec2ab9e3bd9bc92df4369fa780482b5c6251738cdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
