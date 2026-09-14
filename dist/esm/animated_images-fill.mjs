export const name="animated_images-fill";
export const id="dl_09809ad05d7c4f069e8a";
export const url=new URL("../icons/A/animated_images-fill.svg?v=dbcabfcac4bd4f9e8fe5a58c05056e9bf734df40425dcdcb2c5533df593676ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
