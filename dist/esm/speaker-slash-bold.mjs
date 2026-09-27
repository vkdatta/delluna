export const name="speaker-slash-bold";
export const id="dl_f23ba37d8b52152d19ea";
export const url=new URL("../icons/speaker-slash-bold.svg?v=af2796bbf89a1f8a5dd1f864daca96a476fb91129206335a3a211cb8d7d115c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
