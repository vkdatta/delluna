export const name="lucid_3-shield-x";
export const id="dl_4fd11011972f46ca9928";
export const url=new URL("../icons/lucid_3-shield-x.svg?v=30c6692f5ff8a74646c7af2d149bb8b6ea6924f2a997714baac9ec8f858201cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
