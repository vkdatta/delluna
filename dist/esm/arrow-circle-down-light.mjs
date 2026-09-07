export const name="arrow-circle-down-light";
export const id="dl_4ab8702055c04fc69946";
export const url=new URL("../icons/arrow-circle-down-light.svg?v=9d478337b2ae66a8ddf7fe869d710c1e94ee6d11c3cbf4d1af7705a80986e459",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
