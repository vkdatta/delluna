export const name="popcorn-thin";
export const id="dl_e451a215034e4e79a884";
export const url=new URL("../icons/popcorn-thin.svg?v=6f16675b25ffff824a664599418214b5615fce16c4d8763e8d6a8d1e22b4be25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
