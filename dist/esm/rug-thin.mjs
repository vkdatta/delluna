export const name="rug-thin";
export const id="dl_c49871d566b146b0be97";
export const url=new URL("../icons/rug-thin.svg?v=b6c486e22fc70d9536bd40cc40c61debe021623d58cfa2a3fe00c9354ec97b0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
