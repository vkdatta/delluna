export const name="3g_mobiledata";
export const id="dl_882299336667cdb846d8";
export const url=new URL("../icons/3g_mobiledata.svg?v=027c2a070dbf117c9ee87eef1a2e733482cbee96f9a20213fd728e5b8f354c4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
