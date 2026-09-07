export const name="tag-chevron-duotone";
export const id="dl_d16800cec6924446be43";
export const url=new URL("../icons/T/tag-chevron-duotone.svg?v=f7ed1cc29f9dcac743ce55097b805da05ab64d70fb4390427af339187c158e94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
