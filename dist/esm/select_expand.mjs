export const name="select_expand";
export const id="dl_c6431d1f8232de4131c5";
export const url=new URL("../icons/select_expand.svg?v=66e1f6f36b2fa1ed9545e290980a8ddbccb2b74975c8b5baadefa0691e9e94f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
