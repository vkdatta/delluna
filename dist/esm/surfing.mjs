export const name="surfing";
export const id="dl_efdc475e8ad0833f991c";
export const url=new URL("../icons/surfing.svg?v=8d2d26f59f700b7daa3b5bdcecc228950f173bc76021cd045f052b3cfbba1917",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
