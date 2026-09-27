export const name="lucid_2-folder-down";
export const id="dl_308e95718abb4d35b0b0";
export const url=new URL("../icons/lucid_2-folder-down.svg?v=f733c878745e33ecd9d24abd20c97848e004c00e4bcf7f79ec440af84209bc4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
