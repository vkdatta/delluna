export const name="rewind-bold";
export const id="dl_f5f676977bd5480093b1";
export const url=new URL("../icons/rewind-bold.svg?v=968775c3b3c85bbc895b879bba4f88f9e6a835f39f2b79c9b99fccef6c78a761",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
