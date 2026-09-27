export const name="trademark-thin";
export const id="dl_ffd758edb30ae0c952a2";
export const url=new URL("../icons/trademark-thin.svg?v=79e7bdaac8f83cbfab6bc02c8f6481e543afef5af54ca2881f4f6b84fb98254c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
