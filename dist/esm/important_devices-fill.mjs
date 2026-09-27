export const name="important_devices-fill";
export const id="dl_626910a61f2d744d842f";
export const url=new URL("../icons/important_devices-fill.svg?v=4984b880c90237373e6c19cded4664e7f7c7f02260a5f1706f6059e81d414e87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
