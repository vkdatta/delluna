export const name="hand-arrow-up-duotone";
export const id="dl_e863a66e1139427a9600";
export const url=new URL("../icons/hand-arrow-up-duotone.svg?v=67c1cf5738fedf3c81b796f3c756a0bb9248d7681b19164400a6215dd16fd689",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
