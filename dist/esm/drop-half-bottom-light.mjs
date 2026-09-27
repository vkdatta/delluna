export const name="drop-half-bottom-light";
export const id="dl_2e4850f890ea47e3b9fc";
export const url=new URL("../icons/drop-half-bottom-light.svg?v=674291d08e153ae6b8e948e8d43fc0140368856b97353b0d6a77ef2bdecccbde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
