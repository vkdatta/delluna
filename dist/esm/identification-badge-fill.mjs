export const name="identification-badge-fill";
export const id="dl_fdcae8e2cf0347b4882c";
export const url=new URL("../icons/identification-badge-fill.svg?v=6fb7fd4413cf8876644bb9510a11a271d9a3992199355931c59d93037c1c1a96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
