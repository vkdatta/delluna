export const name="tilt_arrow_up";
export const id="dl_8d24af3e6eeed883026f";
export const url=new URL("../icons/tilt_arrow_up.svg?v=b457cc26c89caf984cc554ef612af6ea07cd28419b4c75f5ba87cde7da265427",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
