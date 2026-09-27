export const name="subroutine";
export const id="dl_020f1e7212fe461b935e";
export const url=new URL("../icons/subroutine.svg?v=14c45c4202de566909a77c54251d936212cd9dfb3be37515ed70c0906002afa6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
