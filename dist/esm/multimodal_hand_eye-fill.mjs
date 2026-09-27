export const name="multimodal_hand_eye-fill";
export const id="dl_bc69f8b4515627943a63";
export const url=new URL("../icons/multimodal_hand_eye-fill.svg?v=3c52c8a11a4aae3470a16dd247bb6de6d7e9052d599f5c62fe9753f8d1c5c32a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
