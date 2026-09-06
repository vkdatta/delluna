export const name="camera-slash-bold";
export const id="dl_0aeb1eead2fd41ba92ed";
export const url=new URL("../icons/camera-slash-bold.svg?v=4ed1ac1da58100a24cc26d648c10466eff801871e29d9387ca253d1c4663818a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
