export const name="tv_off";
export const id="dl_b4556cf6701d49e59d9d";
export const url=new URL("../icons/tv_off.svg?v=7efbd6e1a33a56380b70d1c03aca06c1d53ec80196ee0dbc32cbc507259e4ab8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
