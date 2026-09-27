export const name="visor-fill";
export const id="dl_bf333823b983cfa5533a";
export const url=new URL("../icons/visor-fill.svg?v=c2a3d227246b224387624381979b59facc5a34053e84287d463a6a25bda988c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
