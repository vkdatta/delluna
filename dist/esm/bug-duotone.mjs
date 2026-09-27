export const name="bug-duotone";
export const id="dl_0768483c9c6040c2b99f";
export const url=new URL("../icons/bug-duotone.svg?v=8ad894d5417312bfed7ed81a62f053733c171d745ec0f7af35bcc1745d38ebf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
