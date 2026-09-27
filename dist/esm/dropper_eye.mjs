export const name="dropper_eye";
export const id="dl_8c4902531ded99a1ed18";
export const url=new URL("../icons/dropper_eye.svg?v=d6e4ece5258a5b89e5a604972acb117204e1d6739dd04d902f894bfd7f6042f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
