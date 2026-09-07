export const name="trophy-bold";
export const id="dl_e1cbecf5c7054e69b303";
export const url=new URL("../icons/T/trophy-bold.svg?v=a0f8974d38f1ea17839a756a0d6584fa672fc70332d9376486b4f7f715d1af65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
