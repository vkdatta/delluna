export const name="picture_in_picture_off";
export const id="dl_46d482a2e6164169b41b";
export const url=new URL("../icons/picture_in_picture_off.svg?v=c08be627b53a951f775ad17edda686791c82d7501659e58c3dd18abae541bc04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
