export const name="hand_bones";
export const id="dl_b99b87e1ab7be0861cab";
export const url=new URL("../icons/hand_bones.svg?v=0cee7ae1ff71a886608a6b6a1318278d39c86dec6a4beae712bec969a06e74e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
