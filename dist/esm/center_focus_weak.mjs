export const name="center_focus_weak";
export const id="dl_e11f3e80cf2942d8807a";
export const url=new URL("../icons/C/center_focus_weak.svg?v=58ee3311453b6e2fa4dcce085d726fcdb68dceb48a296f7684f0e5963ec850f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
