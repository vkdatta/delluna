export const name="arrow-square-up-left-thin";
export const id="dl_d721aa467a244f089e1a";
export const url=new URL("../icons/arrow-square-up-left-thin.svg?v=182f795f436276a325c32cc7152b16dc60be5cc4f2dad5fc0632a0fadaa16322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
