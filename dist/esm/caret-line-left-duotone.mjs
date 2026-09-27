export const name="caret-line-left-duotone";
export const id="dl_9dd40a99d6b54ad69415";
export const url=new URL("../icons/caret-line-left-duotone.svg?v=71088b756139620ffd3eb51612d78c5ec43ec9bf80dba1e26294d3bceeb257d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
