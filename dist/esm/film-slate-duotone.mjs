export const name="film-slate-duotone";
export const id="dl_211fadb12dd34145b442";
export const url=new URL("../icons/film-slate-duotone.svg?v=409f17cfc2b5113d9dcc27caf0bdcd89a7fcc32746a0179c110897c98ac0cb75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
