export const name="newspaper-clipping-duotone";
export const id="dl_700d850f0dbb4313b252";
export const url=new URL("../icons/newspaper-clipping-duotone.svg?v=03df23b7ae1eef4353533226f4852a0fec2e6bc7c8e55ef4cd40607b333ebba6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
