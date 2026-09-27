export const name="desktop-light";
export const id="dl_c4053667c92c45c8aad1";
export const url=new URL("../icons/desktop-light.svg?v=ae68d367afd4dc1677f6efa58e340bc51a986aca80b87d719d7732da6b460402",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
