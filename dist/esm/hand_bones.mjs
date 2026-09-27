export const name="hand_bones";
export const id="dl_9a63d1ca7a37bb5181c4";
export const url=new URL("../icons/hand_bones.svg?v=ec27e4151db8aeb3bcf31acfe6c4478b98393a08f6399d09777aa1215424064d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
