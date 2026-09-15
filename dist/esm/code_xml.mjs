export const name="code_xml";
export const id="dl_fc9037d7aabc48dbafd0";
export const url=new URL("../icons/C/code_xml.svg?v=c06d80a3f2a5767c2c724e04c07b9ec426bf1b1eaa9a87555945ce49b942cc84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
