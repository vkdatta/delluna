export const name="filter_alt";
export const id="dl_bb4ff01b519e3e90f174";
export const url=new URL("../icons/filter_alt.svg?v=0217df33a7ba2c663ceae6a58dc3c6a7e49ad37e843bab64d34bc18c84acc63d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
