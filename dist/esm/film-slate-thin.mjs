export const name="film-slate-thin";
export const id="dl_611e83ac9f6f45d69c1e";
export const url=new URL("../icons/film-slate-thin.svg?v=8f24f0103ef0dfd2f002370c4ef95c78e76abfc0071c90f5f26a3a4d0fca73ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
