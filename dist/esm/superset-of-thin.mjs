export const name="superset-of-thin";
export const id="dl_c76236b760114043ac13";
export const url=new URL("../icons/S/superset-of-thin.svg?v=9d6691bc083073b85a13973bd5e309ec5f66967d8c8bdbc903d756e10aba6ff6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
