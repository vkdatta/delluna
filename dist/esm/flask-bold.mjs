export const name="flask-bold";
export const id="dl_f4d7c256f21941ea981d";
export const url=new URL("../icons/flask-bold.svg?v=d9c726e3a4d2778bbea67a05b7c1da0f2b36a2d120f5bb1152e4a89b6cd7bec1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
