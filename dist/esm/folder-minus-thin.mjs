export const name="folder-minus-thin";
export const id="dl_5e3c76123abc4abe8aad";
export const url=new URL("../icons/folder-minus-thin.svg?v=1fe695eaa488a1b89029e47d5da0b82c64f44d63f23cc1015cb15879a1ae89bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
