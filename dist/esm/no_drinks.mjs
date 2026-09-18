export const name="no_drinks";
export const id="dl_05417bd6a2144abca71e";
export const url=new URL("../icons/no_drinks.svg?v=9a3ef04be290908f6e160ad335ad40560ba9c488ca9ff3c59c465a663641fb20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
