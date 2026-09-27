export const name="3p-fill";
export const id="dl_e25b4942b1a572323e19";
export const url=new URL("../icons/3p-fill.svg?v=14f6e8dedaca283498053769c89b16d581400850c707ff154578c276e4182845",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
