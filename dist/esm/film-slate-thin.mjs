export const name="film-slate-thin";
export const id="dl_611e83ac9f6f45d69c1e";
export const url=new URL("../icons/film-slate-thin.svg?v=7af67054aa9f8571f9c6f18d6fa50ca513267c6051f777c4f2cb87bf96d4ebb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
