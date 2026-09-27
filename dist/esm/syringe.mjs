export const name="syringe";
export const id="dl_db587a6dcc9a708ce112";
export const url=new URL("../icons/syringe.svg?v=1e14d09c05a22cf6b8eb9a28501707e64bdeae39b4e6fb12e8c05d5f856ee855",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
