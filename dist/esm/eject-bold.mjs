export const name="eject-bold";
export const id="dl_327534cc95674ddbaac7";
export const url=new URL("../icons/eject-bold.svg?v=5d11d2a29f9be3548ac19fe9a6738750b49723871f5484523c100208d803dbcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
