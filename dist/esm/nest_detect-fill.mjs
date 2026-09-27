export const name="nest_detect-fill";
export const id="dl_547d4026c1d57658ae6b";
export const url=new URL("../icons/nest_detect-fill.svg?v=2d4084a5e2ba14f1d9ff87de83b06f933f5a8564bd5e1f412f1345060f79bb48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
