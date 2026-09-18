export const name="file_save-fill";
export const id="dl_c765c87b0db849939627";
export const url=new URL("../icons/file_save-fill.svg?v=08b8e818e370fc2b078f09124e09f21e24845de0785a5e52f7999fcf3dae0fb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
