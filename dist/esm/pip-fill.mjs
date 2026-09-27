export const name="pip-fill";
export const id="dl_c56dc6b0ac610dc19c6f";
export const url=new URL("../icons/pip-fill.svg?v=8c3363a4175424d8a1290bf9892133e3b253dc633d85aad8325070c9348493e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
