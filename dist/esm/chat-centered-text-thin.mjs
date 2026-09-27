export const name="chat-centered-text-thin";
export const id="dl_6a0508a058a840aa9425";
export const url=new URL("../icons/chat-centered-text-thin.svg?v=58536040ecbd638b4bc5f32762da8c45c3f422730766f5fcb8d6ee9ef0a5b8e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
