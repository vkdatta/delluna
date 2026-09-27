export const name="spa";
export const id="dl_62c82ca56591f46d561c";
export const url=new URL("../icons/spa.svg?v=601985e94c348d274c74c1b69fa406534de880352420f5ef251e90df24e1831b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
