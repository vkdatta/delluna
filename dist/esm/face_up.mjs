export const name="face_up";
export const id="dl_6ed67b6a1ab7a3b6c04e";
export const url=new URL("../icons/face_up.svg?v=99a3736de9ca011cbf8186e9fff3902f216e071470e0fb99d0d88c79dbb7f4c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
