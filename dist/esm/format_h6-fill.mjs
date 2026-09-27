export const name="format_h6-fill";
export const id="dl_4712a96a3d1e64dc23ef";
export const url=new URL("../icons/format_h6-fill.svg?v=18a79234abdb673f6c0f1c78cfacae62167f9f66cca32a1d92f1dc0978f1de55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
