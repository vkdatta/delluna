export const name="shuffle";
export const id="dl_e23e7e94c0604662926f";
export const url=new URL("../icons/S/shuffle.svg?v=c3fdac72b005805ddf1078b858eecb55f288d7bc34573ffae276de02373bb6f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
