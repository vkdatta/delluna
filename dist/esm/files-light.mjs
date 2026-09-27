export const name="files-light";
export const id="dl_94167af630644f1aa89c";
export const url=new URL("../icons/files-light.svg?v=bc19c8c8107213626856c6d41b47980b71a4079d4f331706ad6a98fdf86c6470",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
