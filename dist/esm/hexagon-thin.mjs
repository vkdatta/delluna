export const name="hexagon-thin";
export const id="dl_74fb8f7fbdf04ccb9861";
export const url=new URL("../icons/hexagon-thin.svg?v=f27fde35c2b3a43aa05f00381f8bc455c939a651515decb8ef1c909a69557a4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
