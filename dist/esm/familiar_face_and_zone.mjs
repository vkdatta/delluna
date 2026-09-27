export const name="familiar_face_and_zone";
export const id="dl_d4c19577f6e6f21b4067";
export const url=new URL("../icons/familiar_face_and_zone.svg?v=59cf434bcb11a5886a9471661d35eb1b741b5f704a2f2c4c2b5e33ca406bea01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
