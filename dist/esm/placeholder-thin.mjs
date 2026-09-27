export const name="placeholder-thin";
export const id="dl_68cfa4216a454f67bf90";
export const url=new URL("../icons/placeholder-thin.svg?v=7a74bc40899dded64f596d75c6a515f9a1f40dc38f6e0667c635a3be3dfc28c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
