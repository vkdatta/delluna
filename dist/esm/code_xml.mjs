export const name="code_xml";
export const id="dl_49433d195c4059aa8b7c";
export const url=new URL("../icons/code_xml.svg?v=eb0928b6c811c7efa7f460f1a2d97065ed29c22283036ed68eba28b96ffb71f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
