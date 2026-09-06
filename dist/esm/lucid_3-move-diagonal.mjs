export const name="lucid_3-move-diagonal";
export const id="dl_7f2e95cac28442d49bea";
export const url=new URL("../icons/lucid_3-move-diagonal.svg?v=de726d03df9274963d5c7a3444fe84049ec4fd4b10b8c8cff35426b6babe7f80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
