export const name="group_off";
export const id="dl_47b086662db0c542aef2";
export const url=new URL("../icons/group_off.svg?v=6c027a182b69b3ef08e9304ad47b0bf9592b27e3a260625859fd5c2bcbb3505e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
