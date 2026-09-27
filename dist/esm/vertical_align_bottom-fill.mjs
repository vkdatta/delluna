export const name="vertical_align_bottom-fill";
export const id="dl_3cc9f14c7dcf75c42cea";
export const url=new URL("../icons/vertical_align_bottom-fill.svg?v=0730f3b7a68879457351fea849d9aaa16fd111813a24ce71a04f4731dbb1104d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
