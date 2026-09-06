export const name="film-slate-thin";
export const id="dl_611e83ac9f6f45d69c1e";
export const url=new URL("../icons/film-slate-thin.svg?v=421dd3fdd4c0687ee4337f618fb46129569ee7532614c04a7e792d92d4b14c34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
