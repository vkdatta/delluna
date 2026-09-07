export const name="rug";
export const id="dl_97159992f7c04860acef";
export const url=new URL("../icons/rug.svg?v=b90851232f547f394d9c243749dac87ab28c6628df99f332a1950ca365066089",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
