export const name="globe-fill";
export const id="dl_02a92f72405a4a398fba";
export const url=new URL("../icons/globe-fill.svg?v=13c9e6860d02e943124e0fd55cd593dff53d5efe713f7ec39f68acdbfaa04150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
