export const name="user-circle-check-thin";
export const id="dl_674bf85908e94d978781";
export const url=new URL("../icons/U/user-circle-check-thin.svg?v=ea73ce1d651f7aea0d44eab80c3d4d14b47bea5a51429c57efd593967be81884",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
