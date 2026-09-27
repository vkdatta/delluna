export const name="lucid_2-glasses";
export const id="dl_046f7648b58c4bf69ba0";
export const url=new URL("../icons/lucid_2-glasses.svg?v=d2f2b571b36cefe5602378c9ccf3ddc0211edb8420196beb181e370b1249aebd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
