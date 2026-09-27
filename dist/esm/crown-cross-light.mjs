export const name="crown-cross-light";
export const id="dl_6784d6da14be47c5b9f3";
export const url=new URL("../icons/crown-cross-light.svg?v=3d741a4c0f63ff05a24bc8eafa6cacb4bdf5d0194d6eb36908d497752ca7e1db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
