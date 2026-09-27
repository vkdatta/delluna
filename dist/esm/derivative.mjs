export const name="derivative";
export const id="dl_05742197d65b4747beca";
export const url=new URL("../icons/derivative.svg?v=31fd622cad057781603527750c30c631be283cce7c3804b95387ab8616d0fc8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
