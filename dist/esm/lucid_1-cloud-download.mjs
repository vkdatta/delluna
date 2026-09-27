export const name="lucid_1-cloud-download";
export const id="dl_ed8bf05966d2439d9b54";
export const url=new URL("../icons/lucid_1-cloud-download.svg?v=281ad17699db6d14069213c23b8c25353754ee618436cfa4e3c1c0c7bde5707e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
