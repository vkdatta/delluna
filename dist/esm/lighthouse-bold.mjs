export const name="lighthouse-bold";
export const id="dl_7af28b749027488fa6f8";
export const url=new URL("../icons/lighthouse-bold.svg?v=2b220e405a1c730a293147a4fb07ee766feedf2345b21291d2864bfa3c04b7d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
