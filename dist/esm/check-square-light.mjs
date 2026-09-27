export const name="check-square-light";
export const id="dl_e2299cad2fae4befa13d";
export const url=new URL("../icons/check-square-light.svg?v=f841ccb89195b588ffca88e8b3628a936f1c4d84aa876cbfba08dc7b0eb41512",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
