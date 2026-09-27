export const name="picnic-table-thin";
export const id="dl_4088dfffa508402eb743";
export const url=new URL("../icons/picnic-table-thin.svg?v=8f7043b33d1021a0adbd9c5487532c42dae26ec5a55ecf40a2f3cf81993dc906",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
