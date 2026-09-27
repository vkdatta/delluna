export const name="codesandbox-logo-duotone";
export const id="dl_c7ad1bdc9d8c4dc69c6a";
export const url=new URL("../icons/codesandbox-logo-duotone.svg?v=d0ba7110c9c76328a48e026f06581abe39cd46751010c1398d6ccd5fe64f5bc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
