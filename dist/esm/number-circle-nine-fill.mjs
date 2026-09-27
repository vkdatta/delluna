export const name="number-circle-nine-fill";
export const id="dl_f09a9643f3e34dafa4e4";
export const url=new URL("../icons/number-circle-nine-fill.svg?v=ae3647da1eb25507ed47a9fd6bd03444a538f84797e22c2d53e05a2de9cb85ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
