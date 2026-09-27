export const name="stat_2";
export const id="dl_bf92e38eea0ae6947105";
export const url=new URL("../icons/stat_2.svg?v=318dc129ac51bbfd25fb27fefa74aa7c6e42b8cb9b8ba74be1cffddfd18fccc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
