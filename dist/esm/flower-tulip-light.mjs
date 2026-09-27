export const name="flower-tulip-light";
export const id="dl_6b6838fc1cdd4c8da851";
export const url=new URL("../icons/flower-tulip-light.svg?v=9c3a42794253def7f8b31a81930c6836a576bbea634ea44f62e7af0779412059",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
