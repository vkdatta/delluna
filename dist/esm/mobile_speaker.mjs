export const name="mobile_speaker";
export const id="dl_76ce141d7aff8b834ca7";
export const url=new URL("../icons/mobile_speaker.svg?v=266f385ba5eac9ce3407f87394b34f40eb6e52bf0396d26c58db4b5a5c288f8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
