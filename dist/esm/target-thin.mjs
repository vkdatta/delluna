export const name="target-thin";
export const id="dl_e19351f53e244e42a3c2";
export const url=new URL("../icons/T/target-thin.svg?v=b3986c6698e84d666a0d2e7621809726d2c32b6e219e2c64becee6b8c0f3d910",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
