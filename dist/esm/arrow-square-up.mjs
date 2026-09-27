export const name="arrow-square-up";
export const id="dl_fe52e7a8f9124131bab0";
export const url=new URL("../icons/arrow-square-up.svg?v=eed48ebb3dcc38b646d01953db23fc8f966c1c7cd4034d39b65062e53f4d9470",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
