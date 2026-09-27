export const name="lucid_2-fold-vertical";
export const id="dl_27c4017335a2481ba179";
export const url=new URL("../icons/lucid_2-fold-vertical.svg?v=76ec1a66edd8aa3cee2af88fc216bf89aa681f24d6a5afd4960fba237c2d84ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
