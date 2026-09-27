export const name="mood_bad-fill";
export const id="dl_e3fca0c00a5b4966e155";
export const url=new URL("../icons/mood_bad-fill.svg?v=ffa3b564564f2156a34d93354ec91f638b72f30fd3b59080c12eeb14e0cc121e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
