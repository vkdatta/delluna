export const name="folder_check-fill";
export const id="dl_a14347ba52198f59198c";
export const url=new URL("../icons/folder_check-fill.svg?v=17b20c651a2985e57ccb51278f8162cb6e1569c62d81cd20d97419d31d83e779",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
