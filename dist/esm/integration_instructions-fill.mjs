export const name="integration_instructions-fill";
export const id="dl_aaa305a98036e7ab9978";
export const url=new URL("../icons/integration_instructions-fill.svg?v=d376530ceeb5a6025e368292401f1dd9831880fb65955e19890475f403a74435",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
