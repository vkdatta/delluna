export const name="trash-simple-light";
export const id="dl_8767b3b4f10a9e12c5a0";
export const url=new URL("../icons/trash-simple-light.svg?v=bc790e1066b6e7ff881012eca0920d890e3f2a96571202e1c0e477b6f767758d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
