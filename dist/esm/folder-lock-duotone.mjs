export const name="folder-lock-duotone";
export const id="dl_f0d2ca8fe34d40058823";
export const url=new URL("../icons/folder-lock-duotone.svg?v=db8167c100b92d65c297c44939cb563e0886b3456e41c69bf39e5fe1b6ab7020",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
