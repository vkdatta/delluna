export const name="language_french-fill";
export const id="dl_2d6d8c02c5734836e1e6";
export const url=new URL("../icons/language_french-fill.svg?v=3d8ddf966c94c79f7ed79b7a88cefccb02f4d7f7af9b12767752d7e12ef2651f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
