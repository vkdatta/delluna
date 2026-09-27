export const name="paint-brush-fill";
export const id="dl_dc54c7b01c0f4d55b2ff";
export const url=new URL("../icons/paint-brush-fill.svg?v=ebd5a9ecbeb0dff2900b19516a527401ce2156cbba7ad336af9c55f2cf3966a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
