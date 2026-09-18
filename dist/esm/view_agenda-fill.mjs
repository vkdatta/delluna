export const name="view_agenda-fill";
export const id="dl_ecd65663f4e641529427";
export const url=new URL("../icons/view_agenda-fill.svg?v=ce9996a6ab0185054923ea189e8f06c64a637dc72413ea9741b740afbc6d8bf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
