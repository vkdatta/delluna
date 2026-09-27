export const name="multimodal_hand_eye";
export const id="dl_674904c18a056f6cf763";
export const url=new URL("../icons/multimodal_hand_eye.svg?v=ce72d02babf3238154dd30b7d037a58e59086fb17b1403719184e308d85443f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
