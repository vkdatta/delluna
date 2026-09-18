export const name="multimodal_hand_eye";
export const id="dl_51024b809cdd4b81bac6";
export const url=new URL("../icons/multimodal_hand_eye.svg?v=2055b0940f962dce6c2be5fa9b8d3ab019e94eb586281c18aee3e53d17e84299",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
