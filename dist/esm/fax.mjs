export const name="fax";
export const id="dl_9c6f44040484d34e267b";
export const url=new URL("../icons/fax.svg?v=c169f2625e8b546268a43f6e4aa2be77b00274a61f50a39a8bf017acc19a1714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
