export const name="multimodal_hand_eye-fill";
export const id="dl_3afa4bfb519ac93c2ada";
export const url=new URL("../icons/multimodal_hand_eye-fill.svg?v=a29ffbd07b42550565330e5822e7d8ad60af0b8dd1a4860885e22e6b93412617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
