export const name="scan-smiley-fill";
export const id="dl_b6758f63dcdae8360e24";
export const url=new URL("../icons/scan-smiley-fill.svg?v=87234118eec34eaad031f71febaad038719f03f2169873ab4978eced0eddad4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
