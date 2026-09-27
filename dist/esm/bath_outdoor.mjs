export const name="bath_outdoor";
export const id="dl_596f02546108c713cc6c";
export const url=new URL("../icons/bath_outdoor.svg?v=a31ab1cc76416105133ae9413b235479746c7bc7d2accc50276bda03685a864e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
