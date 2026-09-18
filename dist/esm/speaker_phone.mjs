export const name="speaker_phone";
export const id="dl_f49209149e1a4248b30b";
export const url=new URL("../icons/speaker_phone.svg?v=965a48a9bad032ce1aa6c7a37877612d189b6633a7423f45865319c6eb4eefd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
