export const name="multimodal_hand_eye";
export const id="dl_17ddad91f8a200c92146";
export const url=new URL("../icons/multimodal_hand_eye.svg?v=3b6f5c86bdb8a86b7ad3989bb943de2963526f9040733888e13c7f1d61a1dd0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
