export const name="multimodal_hand_eye-fill";
export const id="dl_43631a0b23e017dc18de";
export const url=new URL("../icons/multimodal_hand_eye-fill.svg?v=de303040e5073c8e9620f8c10230ca8909a6cdbbe85d29b82b762f50b9737b62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
