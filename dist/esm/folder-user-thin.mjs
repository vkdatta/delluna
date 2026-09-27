export const name="folder-user-thin";
export const id="dl_732cd8bd3d9b4659a24d";
export const url=new URL("../icons/folder-user-thin.svg?v=695ced3bf82e9fd2f1c3f4f68ede10746eb61af9ada3b88747e479f52d300a60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
