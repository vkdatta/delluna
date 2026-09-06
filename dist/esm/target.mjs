export const name="target";
export const id="dl_09728341e10748039908";
export const url=new URL("../icons/target.svg?v=0023eace1c7e1cd8ef124ea103642a6fec1e3f228d5495158dad640d9f8b8360",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
