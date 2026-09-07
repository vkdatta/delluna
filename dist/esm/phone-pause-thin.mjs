export const name="phone-pause-thin";
export const id="dl_e3c68b642c284001aa34";
export const url=new URL("../icons/phone-pause-thin.svg?v=bb940e2e93d82e418cd8a4298c9026581d696d5f8d677254b3d4a7992b03d5c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
