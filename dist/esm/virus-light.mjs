export const name="virus-light";
export const id="dl_6c260c4f892b45dba1e7";
export const url=new URL("../icons/V/virus-light.svg?v=0482c038002a75d29edcd747f4820146d6223bfca0914c1a6e78e7cf961b9581",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
