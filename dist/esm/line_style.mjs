export const name="line_style";
export const id="dl_2beb711df7373d5b1b9d";
export const url=new URL("../icons/line_style.svg?v=c4b0d8f57053aa925d201c903e7cce3ddc32456ea13952bce6693206fd0153a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
