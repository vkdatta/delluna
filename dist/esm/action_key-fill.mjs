export const name="action_key-fill";
export const id="dl_194c5f43b01349c3798c";
export const url=new URL("../icons/action_key-fill.svg?v=3d843f3dea4775323f6e08a8c0300303ce466324f8fcdcdda3ccd8008b8c3285",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
