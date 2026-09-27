export const name="paperclip-bold";
export const id="dl_bcba6a72eb7a4598a944";
export const url=new URL("../icons/paperclip-bold.svg?v=dadc36bd37d336b2b9a859352706a61f32caa4318d3864163154b7a7b4384a45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
