export const name="format_paint-fill";
export const id="dl_bbbbadbdce904830bb1d";
export const url=new URL("../icons/F/format_paint-fill.svg?v=7b0f6d33ac87115989ac726a050eae14da4ed42785ea4e372ba820402ac52d30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
