export const name="windows-logo-duotone";
export const id="dl_3bd2200938e8bd96b688";
export const url=new URL("../icons/windows-logo-duotone.svg?v=2f040de7868dc0454e71f3589333fc7f44f08a046ae2a318c9d0646184c6ff1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
