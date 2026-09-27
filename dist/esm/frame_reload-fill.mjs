export const name="frame_reload-fill";
export const id="dl_14d3ff3f0ea26b107695";
export const url=new URL("../icons/frame_reload-fill.svg?v=a797ee617aae43c88b21be4d63b1c98fd0edd2a8bce4e3a9b47f72f46fe26e47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
