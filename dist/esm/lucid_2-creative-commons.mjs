export const name="lucid_2-creative-commons";
export const id="dl_4f91c194ce21479d85ff";
export const url=new URL("../icons/lucid_2-creative-commons.svg?v=d70318daaca6fcec34a02220be44c972afda1cf0c0c67ee2f248410eaa9c7abf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
