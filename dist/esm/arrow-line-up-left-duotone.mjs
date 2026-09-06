export const name="arrow-line-up-left-duotone";
export const id="dl_f0e1c351becc461dafcf";
export const url=new URL("../icons/arrow-line-up-left-duotone.svg?v=51909bbf9b4fb0f485b7c8fc89d7ede86898d66d0079ab92a33c908ff3557cfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
