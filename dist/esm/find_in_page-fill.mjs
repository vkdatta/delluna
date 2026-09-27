export const name="find_in_page-fill";
export const id="dl_be8aa09d5d431b5856c8";
export const url=new URL("../icons/find_in_page-fill.svg?v=9e93953e94b418d532123625453ad20dda3c1f040faef4ec162f6e088deb7790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
