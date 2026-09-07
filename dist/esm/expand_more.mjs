export const name="expand_more";
export const id="dl_9cf7cf04081bc4c2d897";
export const url=new URL("../icons/expand_more.svg?v=7506647e6424ad64680a5cac59e9af2c451468da8c4f36281f6e63887c35720f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
