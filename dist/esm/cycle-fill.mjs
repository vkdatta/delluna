export const name="cycle-fill";
export const id="dl_2d4b3fe800e6f8b5060f";
export const url=new URL("../icons/cycle-fill.svg?v=8ee92c712f78f61bc55bbeb380d79f18e550fe32814283807e3512cbefe00819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
