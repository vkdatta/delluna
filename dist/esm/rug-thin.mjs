export const name="rug-thin";
export const id="dl_c49871d566b146b0be97";
export const url=new URL("../icons/rug-thin.svg?v=3ff9175eef9fa6567324d85637dba56c6c544ed64a661f4c6729ee70ade01cb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
